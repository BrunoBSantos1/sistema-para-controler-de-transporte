import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLogin } from '../../models/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submitLogin() {
    const loginObserver = {
      next: x => console.log('User logged in'),
      error: err => console.log(err)
    }

    this.authService.login(this.userLogin).subscribe(loginObserver);
  }

}
