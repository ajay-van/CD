import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { HtmlModel,Expense,Employee }     from './model';
import{TextboxMeta} from './textboxmeta';
import{DropdownMeta} from './dropdownmeta';
import { defer,of,Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class fakeservice {
  public expenses:Expense[];

public Employee:Employee[];
  constructor() {
    this.expenses = [
      { id: 1, name: 'Breakfast', amount: 9.0 },
      { id: 2, name: 'Lunch', amount: 19.0 },
      { id: 3, name: 'Coffee', amount: 3.0 },
      { id: 4, name: 'Drinks', amount: 11.0 }
  ];
}
public getExpenses() {
  return this.expenses;
}
   getEmployee(){
    return this.Employee=[
      {
        Address: "New Delhi",
        Department:"IT",
        EmployeeId:1,
        EmployeeName:"Mukesh Kumar",
        
    },
  ]}

  getname():string{
    return "Ajay";
  }


 getdetails(){
      return this.Employee=[
    {
      Address: "New Delhi",
      Department:"IT",
      EmployeeId:1,
      EmployeeName:"Mukesh Kumar"
  },
];

  }
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
//   getQuestions() {

//     let questions: HtmlModel<any>[] = [

//       new DropdownMeta({
//         key: 'brave',
//         label: 'Bravery Rating',
//         options: [
//           {key: 'solid',  value: 'Solid'},
//           {key: 'great',  value: 'Great'},
//           {key: 'good',   value: 'Good'},
//           {key: 'unproven', value: 'Unproven'}
//         ],
//         order: 3
//       }),

//       new TextboxMeta({
//         key: 'firstName',
//         label: 'First name',
//         value: 'Bombasto',
//         required: true,
//         order: 1
//       }),

//       new TextboxMeta({
//         key: 'emailAddress',
//         label: 'Email',
//         type: 'email',
//         order: 2
//       })
//     ];

//     return questions.sort((a, b) => a.order - b.order);
//   }
}
