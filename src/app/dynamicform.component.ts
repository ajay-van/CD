import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { HtmlModel }     from './model';

@Component({
  selector: 'app-dynamicform-content',
  templateUrl: './dynamicform.component.html'
})
export class DynamicFormComponent {
  @Input() question: HtmlModel<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
