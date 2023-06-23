import { Injectable } from '@angular/core';
import { User } from './types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users = new BehaviorSubject<User[]>([
    { id: 1, name: 'Jan'},
    { id: 2, name: 'Anna'}
  ])
  users$!: Observable<User[]>;

  constructor() {
    this.users$ = this._users.asObservable();
  }
  
  addUser(name: string) {
    const currentUsers = this._users.getValue();
    this._users.next([...currentUsers, {
      id: Math.round(Math.random() * 10000),
      name
    }]);
  }
}
