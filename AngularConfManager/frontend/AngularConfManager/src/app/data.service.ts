import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    dataSource = new BehaviorSubject({});
    currentMessage = this.dataSource.asObservable();

    constructor() { }

    set(message: Object) {
        this.dataSource.next(message);
      // console.log("cur set to: ", message);
    }

    get() {
        let val = this.dataSource.getValue();
      // console.log("retrieving cur: ", val)

        return val;
    }

    subscribe(val) {
      // console.log("external function subscribing on: ", val)
        return this.currentMessage.subscribe(val);
    }

}
