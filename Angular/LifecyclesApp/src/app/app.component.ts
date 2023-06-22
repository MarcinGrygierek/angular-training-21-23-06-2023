import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5, 6];
  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }

  addNumber() {
    // this.numbers = [...this.numbers, (Math.round(Math.random() * 10000))];
    this.numbers.push(Math.round(Math.random() * 10000));
  }
}
