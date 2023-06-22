import { Component, OnInit } from '@angular/core';
import { filter, interval, map, scan } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 ngOnInit(): void {
   interval(1000)
    .pipe(
      filter(val => val % 2 === 0),
      map(val => val ** 2),
      scan((acc, curr) => acc + curr)
    )
    .subscribe(val => console.log(val));
 }
}
