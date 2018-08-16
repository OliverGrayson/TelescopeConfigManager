import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    title = 'app';
    serverData: JSON;

    constructor(private httpClient: HttpClient) {
    }

    sayHi() {
        this.httpClient.get('http://127.0.0.1:5002/hi').subscribe(data => {
            this.serverData = data as JSON;
            console.log(this.serverData);
        })
    }


}
