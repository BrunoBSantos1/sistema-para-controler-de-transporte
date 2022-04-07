import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:3000/'

  constructor(
    private http: HttpClient
  ) { }

  login(model: any) {
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user){
          localStorage.setItem('token', user.accessToken);
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
}
