import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, interval, map, scan, timer, of, from, take, distinctUntilChanged, forkJoin, debounceTime, combineLatest, takeUntil, startWith, tap, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('button', { static: true })
  button!: ElementRef;

 ngOnInit(): void {
   interval(1000)
    .pipe(
      startWith(10),
      tap(val => console.log(`Przed filter ${val}`)),
      filter(val => val % 2 === 0),
      tap(val => console.log(`Po filter ${val}`)),
      take(5),
      // takeUntil(timer(3000)),
      map(val => val ** 2),
      scan((acc, curr) => acc + curr)
    )
    .subscribe(val => console.log(val));

    // niepoprawne
    // let sum = 0;
    // interval(1000)
    // .subscribe(val => {
    //   if(val % 2 === 0) {
    //     sum += val ** 2;
    //     console.log(sum);
    //   }
    // });

    // const ids = [30, 2, 232, 234, 52, 968];

    // from(ids).subscribe(console.log);
    // of(...ids).subscribe(console.log);

    // fromEvent(this.button.nativeElement, 'click')
    // .pipe(
    //   debounceTime(300)
    // )
    // .subscribe(val => console.log(val));

    // const els  = [1, 1, 2, 2, 2, 2, 2, 3, 3, 5, 343, 2, 1, 2, 2, 1];
    // from(els)
    // .pipe(
    //   distinctUntilChanged()
    // )
    // .subscribe(console.log);

    const timer1 = interval(500).pipe(take(5));
    const timer2 = interval(600).pipe(take(5));
    const timer3 = interval(1000).pipe(take(10));

    // combineLatest([timer1, timer2, timer3]).subscribe(console.log);
    forkJoin([timer1, timer2, timer3]).subscribe(console.log);

 }
}
