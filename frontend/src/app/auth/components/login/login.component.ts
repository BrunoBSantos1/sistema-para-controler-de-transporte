import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models/user-login';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AlertService } from 'ngx-alerts';

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
    public authService: AuthService,
    public progressBar: ProgressBarService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  submitLogin() {
    this.progressBar.startLoading();
    const loginObserver = {
        next: x => {
          this.progressBar.setSuccess();
          this.alertService.success('Login efetuado com sucesso!');
          this.progressBar.completeLoading();
        
      },
      error: err => {
        this.progressBar.setError();
        console.log(err)
        this.alertService.danger(err.error);
        this.progressBar.completeLoading();
      }
    }
    this.authService.login(this.userLogin).subscribe(loginObserver);
  }
}
