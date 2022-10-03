import { Injectable } from '@angular/core';
import {loginUser, User} from "../core/interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [];

  constructor() { }

  public get getUsers (): User[] {
    return this.users;
  }

  public setInLocalStorage (payload : User): void {
    this.users.push(payload);
   const registeredUser = JSON.stringify(this.users);
   localStorage.setItem('users', registeredUser);
  }

  public getItemFromLocalStorage () : User[] {
    if(localStorage.getItem('users')) {
      return this.users = JSON.parse(localStorage.getItem('users') || '' );
    }
    return [];
  }

  public setAuthUserInSession (authUser : loginUser) : void {
    localStorage.setItem('session',JSON.stringify(authUser));
  }
  public getUserFromSession () : User {
   return JSON.parse(localStorage.getItem('session') || '' );
  }

}
