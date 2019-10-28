import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  
// user: any;
 
 //2.3  starts 
 @Input('name') userName: String;
 
  // constructor() {
  //    this.user = {
  //      name: this.userName,
  //      designation: 'Software Developer',
  //      address: '12234 main st, city, 100010' ,
  //      phone:[
  //       '123-123-1234',
  //        '456-456-4567',
  //       '456-456-4765'
  //      ] 
  //    }
  //   }

    //  ngOnInit() {
    //   this.user = {
    //     name: this.userName,
    //     designation: 'Software Developer',
    //     address: '12234 main st, city, 100010' ,
    //     phone:[
    //      '123-123-1234',
    //       '456-456-4567',
    //      '456-456-4765'
    //     ] 
    //   }
    //  }

     //2.3   ends

     //2.5 starts 
    //  user: any;
    //  @Input('user') userObj: User;
    //  ngOnInit() {
   
    //  this.user = {
    //   name: this.userObj.name,
    //   designation: this.userObj.designations,
    //   address: this.userObj.address ,
    //   phone:[
    //          this.userObj.phone
    //         ] 
    //   }
    // }

    //2.5 ends

     //2.5.2 starts populates whole data to user
     @Input('user') user: User;
   

     //2.5.2 ends 
    -++  populates whole data to user

  // ngOnInit() {
  //   this.user = {
  //     name: this.userObj.name,
  //     designation: this.userObj.designations,
  //     address: this.userObj.address ,
  //     phone:[
  //      this.userObj.phone
  //     ] 
  //   }
  // }


}
