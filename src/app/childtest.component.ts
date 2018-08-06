import { Component,Input,TemplateRef } from '@angular/core';

@Component({
  selector: 'child-test',
  templateUrl: './childtest.html'
})
export class childtestComponent {
  @Input()  data :any;
}
