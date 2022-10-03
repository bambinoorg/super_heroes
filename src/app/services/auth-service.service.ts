
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuth : boolean = sessionStorage.getItem('user-token') ? true : false;
  private userToken!: number;
  private expireDate: number = 7200000;
  private sessionEnd = true;
  
  
  constructor(
    private router: Router,
  ) { }

  public getIsAuth(): boolean {
    return this.isAuth;
  }

  public singIn(): void {
    this.userToken = Date.now();
    this.setToken();
    this.isAuth = true;
  }

  public logout(): void {
    this.clearToken();
    this.isAuth = false;
    this.sessionEnd = false;
  }

  public checkSession(): boolean {
    if(sessionStorage.getItem('user-token')) {
      const sessionTime = JSON.parse(sessionStorage.getItem('user-token') || '');
      const currentTime = Date.now();
      const userSession = currentTime - sessionTime;
       if( userSession >= this.expireDate) {
          this.logout();
        }
      }   
      return false ;
    }

  private setToken(): void {
    sessionStorage.setItem('user-token', JSON.stringify(this.userToken));
  }

  private clearToken(): void {
    sessionStorage.clear()
  }
}
