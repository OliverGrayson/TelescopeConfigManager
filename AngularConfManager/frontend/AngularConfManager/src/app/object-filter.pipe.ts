import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'objectFilter'
})
export class ObjectFilterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value) {
            let res = value;
            return res;
        }
    }

}
