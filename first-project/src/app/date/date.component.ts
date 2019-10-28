import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
 message: string =" hello";
 //dateSMassage : string = new Date().toDateString();
 dateSMassage : string;
  constructor() {
    // let currentDate = new Date();
    // this.dateSMassage  = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    setInterval(()=>{
    let currentDate = new Date();
     this.dateSMassage  = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    },100); 
  }

    addTwoNumbers(a: number, b: number)
    {
      return a + b;
    }

    someOtherMethod(){
      this.addTwoNumbers(2, 6);
    }

  ngOnInit() {
  }

}
