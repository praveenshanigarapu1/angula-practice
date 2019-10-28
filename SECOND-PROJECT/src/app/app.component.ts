import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SECOND-PROJECT';

  //2.5  starts 
  user: User;
  constructor(){
    this.user  = new User();
    this.user.name = 'Foo Bar';
    this.user.designations = 'Software Engibeer' ;
    this.user.address = '12234 main st, city, 100010';
    this.user.phone = [
      '123-123-1234',
      '456-456-4567'
    ];
  }
}
