import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  interval!: NodeJS.Timer;
  counter = 0;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log('TICK');
      this.counter++;
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
