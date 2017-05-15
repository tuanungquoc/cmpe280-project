/**
 * Created by tuanung on 5/14/17.
 */
import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Show} from "./show.schema";

@Pipe({
    name: 'showNameFilter'
})
@Injectable()
export class ShowNameFilter implements PipeTransform {
    transform(shows: Show[], args: any[]): any {
        return shows.filter(show => show.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
    }
}