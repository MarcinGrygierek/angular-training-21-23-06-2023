import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  @Input()
  numbers: number[] = [];

  counter = 0;
  private interval!: NodeJS.Timer;

  ngOnInit() {
    console.log('INIT');
    this.interval = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CHANGES', changes);
  }

  ngDoCheck(): void {
    console.log('CHANGE DETECTION');
  }

  ngOnDestroy(): void {
      console.log('DESTROY');
      clearInterval(this.interval);
  }

}
