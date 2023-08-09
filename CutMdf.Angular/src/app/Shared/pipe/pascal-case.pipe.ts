import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pascalcase', pure: true })
/**
 *  Transform to Title Case: uppercase the first letter of the words in a string.
 *  Ans trim words
 */
export class PascalCasePipe implements PipeTransform {
    transform(input: string): string {
        return (!input || input.length === 0) ? '' :
            input
                .replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.slice(1).toLowerCase()))
                .replace(/ /g, '');
    }
}