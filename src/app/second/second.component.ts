import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls : ['./second.component.css']

})
export class SecondComponent {
  secondVar: String;
  textArray: any;
  count: number;

  constructor() {
    this.secondVar = 'second';
    this.count = 1;
    this.textArray = [];
  }
  togglemsg() {

    this.textArray.push({content: 'some sample text', id: this.count++});
    console.log(this.textArray);
  }
}
