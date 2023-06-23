import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  users!: Observable<User[]>;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
   this.users = this.usersService.users$;
  }

  addUser() {
    this.usersService.addUser('Lorem ipsum')
  }

}
