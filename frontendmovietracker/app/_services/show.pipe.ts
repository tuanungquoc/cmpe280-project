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
    transform(shows:Show[], args:String) {
        return shows.filter(show => show.name.toLowerCase().indexOf(args.toLowerCase()) !== -1);
    }
}