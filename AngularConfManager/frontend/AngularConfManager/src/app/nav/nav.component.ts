import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { DataService } from '../data.service';
import { ModalService } from '../modal.service';
import { Subscription } from 'rxjs';
import * as json_data from '../json/instrumentConfData.json';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    data:any;

    allowedPrograms: Object;
    allowedInstruments: Object;
    allowedSemesters: Object;

    subscription:Subscription;

    current:any = {"name":"Instrument","progname":"Program","semester":"Semester"};

    opt_show:boolean;show_opt:boolean;inst_name:string;sem_show:boolean;

    // url params (optional)
    url_program:string;
    url_instrument:string;
    url_semester:string;

    constructor(private http:CommunicationService,
                private sharedCurrent:DataService,
                private modal:ModalService,
                private route: ActivatedRoute
                ) { }

    getData() {
        return json_data;
    }

    async ngOnInit() {

        this.data = this.getData();

        // thanks https://gist.github.com/fentas/10289901
        let cookies = this.getCookieList();

        let permissions = await this.http.generateAllowedProgramList(cookies["keckID"]);
        // // let permissions = {
        // //     "allowedPrograms":['U263'],
        // //     "allowedInstruments":['KCWI']
        // // };
        //
        if (!permissions) {
          // console.log("bad login")
            this.modal.show({
                "name":"login",
                "data":""
            })
        }

        console.log(permissions)
        this.allowedPrograms = permissions["allowedPrograms"];
        this.allowedInstruments = permissions["allowedInstruments"];

        // this.allowedPrograms = ['U263', 'U202', 'E001', 'U199', '_test'];
        // this.allowedInstruments = ['KCWI', 'HIRES', 'LRIS', 'MOSFIRE'];
        this.allowedSemesters = ['2018B','2019A'];

        this.route.queryParams
          .subscribe(async params => {
            // console.log("params", params);

            if (params){

                if (params.program) {
                    this.url_program = params.program;
                    this.current.progname = this.url_program;

                    await this.swapProgram(this.url_program);
                }

                if (params.instrument) {
                    this.url_instrument = params.instrument;
                    this.current.name = this.url_instrument;

                    await this.swapInstrument(this.url_instrument);
                }

                if (params.semester) {
                    this.url_semester = params.semester;
                    this.current.semester = this.url_semester;

                    await this.swapSemester(this.url_semester);
                }

                if (params.id) {
                    if (params.instrument && params.program){
                        await this.modal.show({
                            "name":"add",
                            "data":{
                                "current":this.current,
                                "showAdd":false,
                                "id":params.id
                            }
                        });
                    }
                }

                // TODO add support for importing a config from format simulator
                // this.current.info = params.config
            }
        });

        this.show_opt,this.opt_show=false;this.inst_name="Instrument";




        this.sharedCurrent.set(this.current);
        this.subscription = this.sharedCurrent.currentMessage.subscribe((val) => {
            // console.log("nav got current-val from subscription", val);
            if (val) {
                if (this.current != val){
                    this.current = val;
                    this.showList();
                }
            }
        });

        // console.log(data["HIRES"]);

    }

    setDataToResult(result) {
        this.current.configurations = result;
        this.sharedCurrent.set(this.current);
    }

    getCookieList() {
        let c = [];
        document.cookie.replace(
            /([^=;]+)=([^;]*)/gi,
            function(m,key:string,value:string): string {
                    c[key.replace(/(^\s+|\s+$)/g,'')] =
                        value.replace(/(^\s+|\s+$)/g,'');
                    return;
                }
        );

        return c;
    }

    async showList() {
        if (this.current.name !== "Instrument" && this.current.progname !== "Program" && this.current.semester !== "Semester"){
            this.current.data = this.data[this.current.name]["data"];

            // console.log("updating", this.current, this.data);
            let response = await this.http.showList(this.current);
            this.setDataToResult(response);
        }
    }

    async swapProgram(program:string) {
        // console.log(program)
        this.current["progname"]=program;
        if (program !== "Program") {
            await this.showList();
        }
    }

    async swapInstrument(inst:string) {
        // console.log(inst);
        let prog = this.current["progname"];
        let sem = this.current["semester"];

        this.current=this.data[inst];

        if (prog !== "Program") {
            this.current["progname"] = prog;
        }
        if (sem !== "Semester") {
            this.current["semester"] = sem;
        }

        if ((prog !== "Program") && (sem !== "Semester")) {
            await this.showList();
        }

    }

    async swapSemester(sem:string) {
        // console.log(sem);
        this.current["semester"] = sem;
        if (sem !== "Semester") {
            await this.showList();
        }

    }

    showAddPopUp() {
        this.current.info = new Object({});
        this.sharedCurrent.set(this.current);

        this.modal.show({
            "name":"add",
            "data":{
                "current":this.current,
                "showAdd":true
            }
        });
    }

    showEditPopup() {
        this.modal.show({
            "name":"add",
            "data":{
                "current":this.current,
                "showAdd":false
            }
        })
    }

    doFileInput(event:any) {
        event.preventDefault();

        let element: HTMLElement = document.getElementById('statefile');
        element.click();
    }

    parseFile(file:File): string {

        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt:any) {
            // console.log('returned val')
            return evt.target.result;
        }
        reader.onerror = function (evt) {
            throw evt;
        }

        return "";
    }

    onFileContentChange(event:any) {
        let content:string = this.parseFile(event.target.files[0]);

        // console.log(this.current)

        content.split('\n').forEach(function(entry) {
          // console.log(entry)
            let mat = entry.match(/([\w_]+)\s*\=\s*([\w_,.]+)/);
            // console.log(mat);
            this.current.info[mat[1]]=mat[2];
        }, this);

        if (this.current.progname !== this.current.info.progname){
            alert("Warning: state file uploaded for inactive program '" + this.current.info.progname + "'");
            // if (this.current.info.progname.toString() in this.allowedPrograms) {
            //     this.current.progname = this.current.info.progname;
            // }
            // else {
            //     // alert('nope')
            //     console.log(this.current.info.progname, this.allowedPrograms)
            // }
        }
        else {
            this.showEditPopup();
        }
    }

}
