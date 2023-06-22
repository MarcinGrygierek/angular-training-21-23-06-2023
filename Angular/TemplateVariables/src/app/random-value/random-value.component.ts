import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-random-value',
  templateUrl: './random-value.component.html',
  styleUrls: ['./random-value.component.scss']
})
export class RandomValueComponent implements OnInit, OnDestroy {

  randomValue: number = 0;
  interval!: NodeJS.Timer;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.randomValue = Math.round(Math.random() * 10000);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
