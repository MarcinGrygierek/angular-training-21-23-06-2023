import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // const subject = new Subject<number>();
    // const subject = new BehaviorSubject<number>(1000);
    // const subject = new AsyncSubject<number>();
    const subject = new ReplaySubject<number>(5);

    // tylko przykładowo - można zrobić lepiej o wiele
    let counter = 0;
    setInterval(() => {
      subject.next(counter++);
    }, 500)

    subject.subscribe(val => console.log(`Subject 1 ${val}`))

    setTimeout(() => {
      subject.subscribe(val => console.log(`Subject 2 ${val}`))
    }, 2000)

    setTimeout(() => {
      subject.complete();
    }, 5000)
  }
}
