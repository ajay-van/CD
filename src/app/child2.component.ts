import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'child-test2',
  templateUrl: './childtest2.html'
})
export class childtestComponent2 {
  @Input() data2 :any;
public inputdata:string;
ngOnInit(): void{
    this.inputdata=this.data2;
}
}
