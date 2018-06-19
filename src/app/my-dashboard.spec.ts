import { TestBed, async ,tick,fakeAsync,ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NestedMenuExample} from './my-dashboard';
import{DataService} from './htmldataservice';
import{FormsModule} from '@angular/forms';
import { asyncData, asyncError} from './async-observable-helpers';
import { defer,of } from 'rxjs';
import {fakeservice} from './fakehtmldataservice';
import {By, BrowserModule} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import{Expense,Employee} from './model';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

describe('my-dashboard', () => {
  let testQuote: string;
  let exp:string;
  let component1: NestedMenuExample;
  let fixture: any;
  let element:DebugElement;
  beforeEach(async(() => {
    //const twainService = jasmine.createSpyObj('DataService', ['getname']);
    // const twainService1 = jasmine.createSpyObj('DataService', ['getEmployee']);
     //exp=twainService.getname.and.returnValue('Ajay123');
    TestBed.configureTestingModule({
      declarations: [
        NestedMenuExample,
      ],
      imports: [ FormsModule],
      providers: [DataService]
    }).compileComponents();

   //fixture.detectChanges();
  }),
);

//   it('should create the dashboard', async(() => {
//     const fixture = TestBed.createComponent(NestedMenuExample);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//   it(`should have as title 'app'`, async(() => {
//     const fixture = TestBed.createComponent(NestedMenuExample);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.bhi).toEqual('Details');
//   }));
//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(NestedMenuExample);
//    // fixture.detectChanges();
//     const app = fixture.debugElement.componentInstance;
//     const compiled = fixture.debugElement.nativeElement;
//     console.log(compiled.querySelector('h1').textContent);
//     expect(compiled.querySelector('h1').textContent).toEqual("Details");
//   }));
//   it('using service to get data..', async(() => {
//     const fixture = TestBed.createComponent(NestedMenuExample);
//     const app = fixture.debugElement.componentInstance;
//     const exp='Ajay123';
//      const dt=app.getname();
//      expect(exp).toEqual(dt);
//   }));
beforeEach(()=>{
  fixture = TestBed.createComponent(NestedMenuExample);
  component1 = fixture.componentInstance;
  element = fixture.debugElement;
});
  it('count......', async(() => { 
   const service = new fakeservice();
   const component = new NestedMenuExample(service);
 //  component.getEmployeeDetails();
    //this.Employee=component.Employee;
    fixture.detectChanges();
    const el = element.query(By.css('td')).nativeElement;
     expect('New Delhi').toEqual(el.textContent);
  }));          
});
          

describe('Component: Expenses-Shallow', () => {
  let fixture: ComponentFixture<NestedMenuExample>;
  let component: NestedMenuExample;
  let de: DebugElement;
  let expensesService: DataService;
  let expenses: Expense[] = [{ id: 1, name: 'test', amount: 10 }];

  // Using beforeAll will break the tests.
  beforeEach(async(() => {
      TestBed.configureTestingModule({
              declarations: [ NestedMenuExample ],
              imports: [ FormsModule,HttpClientModule],
              providers: [ DataService ]
      }).compileComponents();

      fixture = TestBed.createComponent(NestedMenuExample);
      component = fixture.componentInstance;
      de = fixture.debugElement;
      expensesService = TestBed.get(DataService);
  }));

  it('should show expense when served from service', () => {
      spyOn(expensesService, 'getExpenses')
          .and.returnValue(expenses);

      fixture.detectChanges();
      //tick()
      // Just to show passing tests.
      const el = de.query(By.css('td')).nativeElement;
      console.log(el.textContent);
      expect(el.textContent).toEqual('1');
  });
});