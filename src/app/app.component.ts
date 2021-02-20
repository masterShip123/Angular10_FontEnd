import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  // tslint:disable-next-line:ban-types
  name: String = 'shitty';
  // tslint:disable-next-line:whitespace
  position = ['Admin','HR','IT'];
  imageUrl = 'https://thestandard.co/wp-content/uploads/2020/02/25-1.jpg';
  // tslint:disable-next-line:typedef
  setName(){
    this.name = 'Yai';
  }
}
