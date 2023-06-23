import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-stats',
  templateUrl: './users-stats.component.html',
  styleUrls: ['./users-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersStatsComponent implements OnInit {
  users!: Observable<User[]>;

  obs = new Observable<number>((observer) => {
    setTimeout(() => {
      observer.next(100);
    }, 5000)
  })

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.users$;
  }
}
