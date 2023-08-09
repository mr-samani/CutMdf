import { Pipe, PipeTransform, Injectable } from '@angular/core';
//example asc sort  *ngFor="let item of list| sort: 'priority';let i=index;"
//example desc sort  *ngFor="let item of list| sort: 'priority':true;let i=index;"
@Pipe({
  name: 'sort'
})
export class ArraySortPipe implements PipeTransform {

  transform(array: any, field: string, desc: boolean = false): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    if (desc) {
      array.sort((a: any, b: any) => {
        if (a[field] > b[field]) {
          return -1;
        } else if (a[field] < b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      array.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return array;
  }



}
