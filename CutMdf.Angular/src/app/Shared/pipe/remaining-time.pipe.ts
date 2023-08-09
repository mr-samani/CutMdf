import { Pipe, PipeTransform, Injectable, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponentBase } from '@shared/common/app-component-base';

@Pipe({
  name: 'remaining'
})
export class RemainingTimePipe extends AppComponentBase implements PipeTransform {


  constructor(
    private sanatizer: DomSanitizer,
    injector: Injector
  ) {
    super(injector)
  }

  transform(value: number): any {

    if (value) {
      value = +value;
      let day = value / (24 * 3600);

      value = value % (24 * 3600);
      let hour = value / 3600;

      value %= 3600;
      var minutes = value / 60;

      value %= 60;
      var seconds = value;

      if (Math.floor(day) > 0) {
        return this.sanatizer.bypassSecurityTrustHtml('<div style="display:flex;direction:ltr;">' +
          '<div style="display:flex;align-items:center;flex-direction:column;min-width:30px">' +
          '    <strong style="font-size:16px;">' + Math.floor(day) + '</strong>' +
          '    <span style="font-size:10px">' + this.l('Day') + '</span>' +
          '</div>:' +
          '<div style="display:flex;align-items:center;flex-direction:column;min-width:30px">' +
          '    <strong style="font-size:16px;">' + Math.floor(hour) + '</strong>' +
          '    <span style="font-size:10px">' + this.l('Hour') + '</span>' +
          '</div>:' +
          '<div style="display:flex;align-items:center;flex-direction:column;min-width:30px">' +
          '    <strong style="font-size:16px;">' + Math.floor(minutes) + '</strong>' +
          '    <span style="font-size:10px">' + this.l('Minute') + '</span>' +
          '</div>:' +
          '<div style="display:flex;align-items:center;flex-direction:column;min-width:30px">' +
          '    <strong style="font-size:16px;">' + Math.floor(seconds) + '</strong>' +
          '    <span style="font-size:10px">' + this.l('Second') + '</span>' +
          '</div>' +
          '</div>');
        //return this.l('RemainigDaysHoursMinutsSecend{0}{1}{2}{3}', day.toFixed(), hour.toFixed(), minutes.toFixed(),seconds.toFixed());
      } else {
        return this.sanatizer.bypassSecurityTrustHtml('<div style="display:flex;direction:ltr;">' +
          '<div style="display:flex;align-items:center;flex-direction:column;min-width:30px">' +
          '    <strong style="font-size:16px;">' + Math.floor(hour) + '</strong>' +
          '    <span style="font-size:10px">' + this.l('Hour') + '</span>' +
          '</div>:' +
          '<div style="display:flex;align-items:center;flex-direction:column;min-width:30px">' +
          '    <strong style="font-size:16px;">' + Math.floor(minutes) + '</strong>' +
          '    <span style="font-size:10px">' + this.l('Minute') + '</span>' +
          '</div>:' +
          '<div style="display:flex;align-items:center;flex-direction:column;min-width:30px">' +
          '    <strong style="font-size:16px;">' + Math.floor(seconds) + '</strong>' +
          '    <span style="font-size:10px">' + this.l('Second') + '</span>' +
          '</div>' +
          '</div>');
        // return this.l('RemainigHoursMinutsSecend{0}{1}{2}', hour.toFixed(), minutes.toFixed(),seconds.toFixed());

      }
    } else
      return '0';

  }






}
