import { Component } from '@angular/core'
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  email: string | undefined
  password: string | undefined
  confirmPassword: string | undefined
  passwordError: boolean

  constructor(public loginService: LoginService) {
  }

  register() {
    const user = { email: this.email, password: this.password };
    this.loginService.register(user).subscribe(data => {
      console.log(data);
    console.log(this.email)
    console.log(this.password)
    })
  }

}
