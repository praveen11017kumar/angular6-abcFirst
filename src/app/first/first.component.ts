import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
  styleUrls : ['./first.component.css']
})
export class FirstComponent {
  firstCompData: String;
  firstVar: String;
  btnEnable: boolean;
  textValue: String ;
  username: String;

    constructor() {

      this.textValue = '';
      this.btnEnable =  false;
      this.firstVar = 'first';
      this.firstCompData = '';
      this.username = '';

      setTimeout(() => {
        this.btnEnable = true;
      }, 4000 );

    }

    changeMsg() {
        this.firstCompData = 'Message Changed';
        this.firstVar = 'On click changed to FIRST';
    }
    checkUsername() {
        this.username = '';
    }

}
