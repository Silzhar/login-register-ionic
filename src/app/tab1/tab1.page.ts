import { Component } from '@angular/core'

import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public email: string | undefined;
  public password!: string;

  constructor(public loginService: LoginService) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.loginService.login(user).subscribe( data => {
      console.log(data);
    });
  }

}
