/**
 * Created by tuanung on 5/14/17.
 */
/**
 * Created by tuanung on 5/13/17.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateFormat'
})

export class DatePipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        var date = value instanceof Date ? value : new Date(value);
        return date;
    }
}