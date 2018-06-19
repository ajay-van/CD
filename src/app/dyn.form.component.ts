import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { HtmlModel }              from './model';
import { QuestionControlService }    from './dynamicform.controlservice';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dyn.form.component.html',
  providers: [ QuestionControlService ]
})
export class DynFormComponent implements OnInit {

  @Input() questions: HtmlModel<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/