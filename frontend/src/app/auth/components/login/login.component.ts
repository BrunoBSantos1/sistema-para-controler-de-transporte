import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLogin } from '../../models/user-login';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

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
    private authService: AuthService,
    public progressBar: ProgressBarService
  ) { }

  ngOnInit(): void {
  }

  submitLogin() {
    this.progressBar.startLoading();
    const loginObserver = {
        next: x => {console.log('User logged in')
        this.progressBar.completeLoading();
        this.progressBar.setSuccess();
      },
      error: err => {
        this.progressBar.setError();
        console.log(err)
        this.progressBar.completeLoading();
      }
    }
    this.authService.login(this.userLogin).subscribe(loginObserver);
  }
}
