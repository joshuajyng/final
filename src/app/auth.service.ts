import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

import {User} from './User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public getToken(): string {
    const temp = localStorage.getItem('access_token');
    
    return temp!==null? JSON.stringify(temp) : "";
  }

  public readToken(): any{
    const token = localStorage.getItem('access_token');
    
    return helper.decodeToken(token !==null? JSON.stringify(localStorage.getItem('access_token')) : "");
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');

    // Note: We can also use this.jwtHelper.isTokenExpired(token) 
    // to see if the token is expired

    if (token) {
      console.log('token exists');
      return true;
    } else {
      console.log('no token');
      return false;
    }
  }

  login(user: User): Observable<any> {
    // Attempt to login
    return this.http.post<any>('https://intense-lowlands-89969.herokuapp.com/api/login', user);
  }
}