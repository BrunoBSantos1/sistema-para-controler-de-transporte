import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:3000/';
  helper = new JwtHelperService();
  decodeToken: any;

  constructor(
    private http: HttpClient
  ) { }

  login(model: any) {
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user){
          localStorage.setItem('token', user.accessToken);
          this.decodeToken = this.helper.decodeToken( user.accessToken)
          console.log(this.decodeToken);
        }
      })
    )
  }

  register(model: any) {
    return this.http.post(this.authUrl + 'register', model).pipe(
      map((response: any) => {
        console.log(response);
      })
      )
  }

  isLogged(){
    const token = localStorage.getItem('token');
    return this.helper.isTokenExpired(token);
  }

}
