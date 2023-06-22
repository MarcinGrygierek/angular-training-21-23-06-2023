import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UsersApp';

  users: string[] = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet']

  deleteUser(index: number) {
    console.log('Clicked', index);
    this.users.splice(index, 1);
  }
}
