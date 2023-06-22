import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  values = [1, 2, 3, 4, 5, 6];

  addValue() {
    // this.values.push(Math.round(Math.random() * 100000));
    this.values = [...this.values, Math.round(Math.random() * 100000)];
  }
}
