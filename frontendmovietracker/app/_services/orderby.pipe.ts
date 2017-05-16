import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Show} from "./show.schema";

@Pipe({
    name: 'orderByRating'
})
@Injectable()
export class OrderBy implements PipeTransform {
    transform(array: Show[], args: string):Show[] {

        array.sort((a: Show, b: Show) => {

            if (a[args] < b[args]) {
                return 1;
            } else if (a[args] > b[args]) {
                return -1;
            } else {
                return 0;
            }
        });
        return array;
    }
}