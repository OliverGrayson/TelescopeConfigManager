import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as data from '../json/instrumentConfData.json';
import * as config from '../json/config.json';
import { CommunicationService } from '../communication.service';
import { ModalService } from '../modal.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    table_headings:string[] = [];
    current:any;
    configs:string[]=[];
    configIDs:string[]=[];

    subscription: Subscription;

    constructor(
        private http:CommunicationService,
        private sharedCurrent:DataService,
        private modal:ModalService
    ) { }

    ngOnInit() {
        // this.sharedCurrent.subscribe((val) => {
        //     this.current = val;
        //     this.table_headings = this.tableInit(this.current);
        // });

        this.subscription = this.sharedCurrent.currentMessage.subscribe((val) => {
            // console.log("table got current-val from subscription", val);
            if (val) {
                this.current = val;
                [this.table_headings, this.configs, this.configIDs] = this.tableInit(val);
            }
        });
    }

    tableInit(current) {
        // console.log(current, "from tableInit")
        let headers = [];
        if (current.configurations){
            headers.push(current.data.textEntryData["statenam"].title);

            for (let v in current.configurations[0]) {
                if (current.data.selectableData.hasOwnProperty(v)) {
                    // console.log('selectable: ',.current.data.selectableData[v])
                    headers.push(current.data.selectableData[v].title);
                }
                else if (current.data.textEntryData.hasOwnProperty(v) && v != "statenam" ) {
                    // console.log('text entry: ', .current.data.textEntryData[v])
                    headers.push(current.data.textEntryData[v].title);
                }
                else {
                    if (v != "id" && v != "progname" && v != "statenam" && v != "semester") {
                        headers.push(v);
                    }
                }
            }

            let goodConfigurations = [];
            let configIDs = [];

            current.configurations.forEach(v => {
                let lessEvilResponse = []
                // Step 1. Get all the object keys.
                // let evilResponseProps = Object.values(v);
                // console.log(evilResponseProps);
                // Step 2. Create an empty array.
                // Step 3. Iterate throw all keys.
                // console.log("v:",v)
                lessEvilResponse.push(v["statenam"].toString());


                for (let key in v) {
                    // skip loop if the property is from prototype
                    if (!v.hasOwnProperty(key)) continue;

                    var obj = v[key];
                    // console.log("key:",key," obj:",obj)

                    if (key == "id") {
                        configIDs.push(obj);
                    }
                    else if (key != "progname" && key != "statenam" && key != "semester"){
                        lessEvilResponse.push(obj.toString());
                    }
                }

                goodConfigurations.push(lessEvilResponse);
            });

          // console.log("table init'd, ", headers, goodConfigurations);

            return [headers, goodConfigurations, configIDs];
        }

        return [[],[]];


    }

    editConfiguration(id) {
        this.current.info.id = id;
        this.modal.show({
            "name":"add",
            "data":{
                "current":this.current,
                "showAdd":false,
                "id":id,
            }
        });
    }
    async duplicateConfiguration(id) {
      // console.log("duplicate", id)
        this.current.info.id = id;
        let duplicate_response = await this.http.duplicateConfiguration(this.current);

      // console.log(duplicate_response)
        if (duplicate_response) {
            this.current.configurations = duplicate_response;
            this.sharedCurrent.set(this.current);
        }
    }
    async confirmDelete(id) {
      // console.log("delete", id)
        this.current.deleteConfigurationId = id;
        let delete_repsonse = await this.http.deleteConfiguration(this.current);

      // console.log(delete_repsonse)
        if (delete_repsonse) {
            this.current.configurations = delete_repsonse;
            this.sharedCurrent.set(this.current);
        }
    }
    async saveConfiguration(id) {
      // console.log("save", id)
        this.current.info.id = id;
        await this.http.saveConfiguration(this.current);
    }

}
