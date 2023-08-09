import { Pipe, PipeTransform } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { FormQuestionTypesEnum } from '@shared/service-proxies/service-proxies';

@Pipe({
  name: 'questionTitle'
})
export class QuestionTitlePipe extends AppComponentBase implements PipeTransform {

  transform(questionType: FormQuestionTypesEnum): unknown {
    switch (questionType) {
      case FormQuestionTypesEnum.UniqueSelect:
        return this.l('SingleSelect');
      case FormQuestionTypesEnum.Dropdown:
        return this.l('DropDown');
      case FormQuestionTypesEnum.Matrix:
        return this.l('Matrix');
      case FormQuestionTypesEnum.Matrix_Dynamic:
        return this.l('MatrixDynamic');
      case FormQuestionTypesEnum.Matrix_Checkbox:
        return this.l('Matrix') + ' ' + this.l('MultiSelect');
      case FormQuestionTypesEnum.Matrix_Radio:
        return this.l('Matrix') + ' ' + this.l('SingleSelect');
      case FormQuestionTypesEnum.Matrix_MultiShortText:
        return this.l('Matrix') + ' ' + this.l('MultiShortText');
      case FormQuestionTypesEnum.Matrix_MultiNumeric:
        return this.l('Matrix') + ' ' + this.l('MultiNumeric');
      case FormQuestionTypesEnum.MultiSelect:
        return this.l('MultiSelect');
      case FormQuestionTypesEnum.SkuCount:
        return this.l('SkuCount');
      case FormQuestionTypesEnum.SkuCount_Dynamic:
        return this.l('DynamicSkuCount');
      case FormQuestionTypesEnum.HasPriority:
        return this.l('HasPeriority');
      case FormQuestionTypesEnum.Point:
        return this.l('PointQuestion');
      case FormQuestionTypesEnum.Phone:
        return this.l('PhoneNumber');
      case FormQuestionTypesEnum.Mobile:
        return this.l('MobileNumber');
      case FormQuestionTypesEnum.NationalCode:
        return this.l('NationalCode');
      case FormQuestionTypesEnum.Numeric:
        return this.l('Numeric');
      case FormQuestionTypesEnum.Date:
        return this.l('DatePicker');
      case FormQuestionTypesEnum.Time:
        return this.l('Time');
      case FormQuestionTypesEnum.Email:
        return this.l('Email');
      case FormQuestionTypesEnum.ShortText:
        return this.l('ShortText');
      case FormQuestionTypesEnum.LongText:
        return this.l('LongText');
      case FormQuestionTypesEnum.DynamicAnswer:
        return this.l('DynamicAnswer');
      case FormQuestionTypesEnum.HtmlFrame:
        return 'Html';
      case FormQuestionTypesEnum.FileUpload:
        return this.l('FileUpload');
      case FormQuestionTypesEnum.Point_NumericScale:
        return this.l('ScaleQuestion');
      case FormQuestionTypesEnum.Emoji:
        return this.l('LikertEmojiQuestion');
      case FormQuestionTypesEnum.NPS:
        return this.l('NPSQuestion');
      case FormQuestionTypesEnum.Rating:
        return this.l('RatingQuestion');
      case FormQuestionTypesEnum.Chart:
        return this.l('ChartQuestion');
      default:
        return '';
    }

  }

}
