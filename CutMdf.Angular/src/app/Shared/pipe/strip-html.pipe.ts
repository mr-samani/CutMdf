import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'striphtml'
})
export class StripHtmlPipe implements PipeTransform {
    transform(value: string): any {
        // return value.replace(/<.*?>/g, ''); // replace tags
        if (!value) {
            return '';
        }
        return this.stripHtml(value.toString());
    }


    stripHtml(html: string) {
        // ----- remove HTML TAGs ----- 
        let $string = html.replace(/<[^>]*>/g, ' ');

        // ----- remove control characters ----- 
        $string = $string.replace("\r", '');    // --- replace with empty space
        $string = $string.replace("\n", ' ');   // --- replace with space
        $string = $string.replace("\t", ' ');   // --- replace with space

        // ----- remove multiple spaces ----- 
        $string = ($string.replace('/ {2,}/', ' ')).trim();

        return $string;
    }


}