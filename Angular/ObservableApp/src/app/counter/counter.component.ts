import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  constructor() { }

  sub!: Subscription;

  ngOnInit(): void {
    const obs = new Observable(observer => {
      let counter = 0;

      const interval = setInterval(() => {
        console.log('TICK');
        observer.next(counter++);
        if(counter === 5) {
          observer.error('ERROR');
        }
      }, 1000)

      return {
        unsubscribe() {
          clearInterval(interval);
        }
      }
    })

    this.sub = obs.subscribe({
      next(value) {
          console.log(value);
      },
      error(error) {
        console.log(error);
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
