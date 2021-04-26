import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User';
import { JwtResponse } from '../../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private _router: Router) { }

  authSubject = new BehaviorSubject(false);

  signIn(user: User): Observable<JwtResponse> {
    return this.httpClient.post(`${environment.server}/api/login`, user).pipe(

      tap(async (res: any) => {
        if (res) {
          localStorage.setItem("username", res.username);
          console.log(localStorage.getItem('username'));
          this.authSubject.next(true);
          return res;
        }
      })

    );
  }

  isAuthenticated() {
    return this.authSubject.asObservable();
  }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['/login'])
  }

  public get logIn(): boolean {
    return (localStorage.getItem('user') !== null);
  }

}
