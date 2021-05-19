import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  constructor() {
  }

  register() {
    console.log(this.email);
    console.log(this.password);
  }

}
