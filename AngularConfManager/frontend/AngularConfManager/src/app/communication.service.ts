import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DataService } from './data.service';

let httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CommunicationService {

    private serverURL = 'https://opsbuild:5002';  // URL to web api
    serverData: JSON;


    constructor(private httpClient: HttpClient, private sharedCurrent:DataService) { }

    // get list of configs for current instrument
    async showList(current): Promise<any> {

        if (current.name !== 'Instrument' /* default */) {

          // console.log("retrieving", current.name, current.progname, "from", current);

            let response = await this.httpClient.post(
                this.serverURL+'\/getConfigurationList', {
                    progname:current.progname,
                    instrument:current.name
                }).toPromise();

          // console.log("showList: ", response)

            current.configurations = response;
            this.sharedCurrent.set(current);
            return response; // => current.configurations

                    // current.configurations = response.data;
                    // setInstVars();
        }
        else {
            return;
        }
    }

    // send the file to the backend to be uploaded to the database
    async loadConfiguration(current): Promise<any> {

        let response = await this.httpClient.post(
            this.serverURL+'\/sendFile', {
                instrument:current.name,
                file:current.content,
                progname:current.info.progname,
                filename:current.fileName
            }).toPromise();

        return (response["statusText"]==="OK");
    }

    async saveAll(current): Promise<any>{

        let response = await this.httpClient.post(
            this.serverURL+'\/saveAllConfigurations', {
                instrument:current.name,
                progname:current.info.progname
            }).toPromise();

        return (response["statusText"]==="OK");
    }

    // save a new configuration
    async addConfiguration(current): Promise<any>{
      // console.log("adding", current)

        current.info.progname = current.progname
        current.info.semester = current.semester


        let response = await this.httpClient.post(
            this.serverURL+'\/addConfiguration', {
                info:current.info,
                instrument:current.name
            }).toPromise();

        if (response) {
          // console.log("added", response)
            let list_response = await this.showList(current);
            return list_response;
        }
        else {
            return;
        }
    }

    // get an entry to edit
    async editConfiguration(current): Promise<any> {

        let response = await this.httpClient.post(
            this.serverURL+'\/getConfiguration', {
                instrument:current.name,
                id:current.info.id
            }).toPromise();

        if (response) {
            let list_response = await this.showList(current);
            return list_response;
        }
        else {
            return;
        }
    }

    // post a duplicate config (from table buttons)
    async duplicateConfiguration(current): Promise<any> {

        let get_response = await this.httpClient.post(
            this.serverURL+'\/getConfiguration', {
                instrument:current.name,
                id:current.info.id
            }).toPromise();

        current.info = get_response;

        let commit_response = await this.httpClient.post(
            this.serverURL+'\/addConfiguration', {
                instrument:current.name,
                info:current.info,
                semester:current.semester
            }).toPromise();

        if (commit_response) {
            let list_response = await this.showList(current);
            return list_response;
        }
        else {
            return;
        }
    }

    // delete a config. TODO: only mark as deleted?
    async deleteConfiguration(current): Promise<any>{

        let response = await this.httpClient.post(
            this.serverURL+'\/deleteConfiguration', {
                instrument:current.name,
                id:current.deleteConfigurationId
            }).toPromise();

        if (response) {
            let list_response = await this.showList(current);
            return list_response;
        }
        else {
            return;
        }
    }

    // save a .STATE file to the server
    async saveConfiguration(current): Promise<any>{

        let response = await this.httpClient.post(
            this.serverURL+'\/saveConfiguration', {
                instrument:current.name,
                id:current.info.id

            }).toPromise();

        return (response["statusText"]==="OK");
    }

    // post edited config to database
    async updateConfiguration(current): Promise<any>{

        current.info.semester = current.semester

      // console.log("updating", JSON.parse(JSON.stringify({
      //       instrument:current.name,
      //       info:current.info,
      //       id:current.info.id,
      //       semester:current.semester
      //   })));

        let response = await this.httpClient.post(
            this.serverURL+'\/updateConfiguration', {
                "instrument":current.name,
                "info":current.info,
                "id":current.info.id,
                semester:current.semester
            }).toPromise();


        if (response) {
            let list_response = await this.showList(current);
            return list_response;
        }
        else {
            return;
        }
    }

    // use keckID cookie to get schedule JSON from backend
    async generateAllowedProgramList(keckID): Promise<any>{

      // console.log(keckID)

        let reponse = await this.httpClient.post<any[]>(
            this.serverURL+'\/getAllowedPrograms', {
                "keck_id": keckID
            }).toPromise();

      // console.log(reponse);
        // return response;
        if (Object.keys(reponse).length === 0) {
            return {
                "allowedPrograms":[],
                "allowedInstruments": []
            };
        }
        else {
            let programs:string[] = [];
            let instruments:string[] = [];

            reponse.forEach(function(program) {
                programs.push(program[0]);
                instruments.push(program[1]);
            });

            return {
                "allowedPrograms":programs,
                "allowedInstruments": instruments
            }
        }
    }


    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    // private handleError<T> (operation = 'operation', result?: T) {
    //   return (error: any): Observable<T> => {
    //
    //     // TODO: send the error to remote logging infrastructure
    //     console.error(error); // log to console instead
    //
    //     // TODO: better job of transforming error for user consumption
    //     this.log(`${operation} failed: ${error.message}`);
    //
    //     // Let the app keep running by returning an empty result.
    //     return of(result as T);
    //   };
    // }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
