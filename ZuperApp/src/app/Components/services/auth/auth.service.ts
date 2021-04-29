import { tokenInfo } from './../../models/tokenInfo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User';
import { JwtResponse } from '../../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private _router: Router) { }

  decoded!:tokenInfo;

  authSubject = new BehaviorSubject(false);

  signIn(user: User): Observable<JwtResponse> {
    return this.httpClient.post(`${environment.server}/api/login`, user).pipe(

      tap(async (res: any) => {
        if (res) {
          localStorage.setItem("username", res.username);
          sessionStorage.setItem("token",res.token)
          //console.log(localStorage.getItem('username'));
          //console.log(sessionStorage.getItem('token'));
          this.authSubject.next(true);
          return res;
        }
      })

    );
  }

  checkLogInStatus() : boolean{

    var token = sessionStorage.getItem('token');

    if(token)
    {
      this.decoded = jwt_decode(token);


      if(this.decoded.exp == undefined){
          return false;
      }

      const date = new Date(0);

      let tokenExpDate = date.setUTCMilliseconds(Number(this.decoded.exp));

      if(tokenExpDate.valueOf() > new Date().valueOf()){
          this._router.navigate(['/login']);
          return true;
      }
      return false;
    }

    return false;
  }

  isAuthenticated() {
    return this.authSubject.asObservable();
  }

  logout() {
    localStorage.removeItem('username');
    sessionStorage.removeItem('token');
    this._router.navigate(['/login'])
  }

  public get logIn(): boolean {
    return (localStorage.getItem('user') !== null);
  }
}
