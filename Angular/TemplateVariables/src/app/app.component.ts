import { AfterViewInit, AfterViewChecked, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RandomValueComponent } from './random-value/random-value.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  total: number = 0;
  @ViewChild('email')
  inputEmail!: ElementRef;

  @ViewChildren(RandomValueComponent)
  randomValues!: QueryList<RandomValueComponent>;

  ngOnInit() {
    console.log(this.inputEmail);
  }

  ngAfterViewInit(): void {
    console.log(this.inputEmail);

  }

  ngAfterViewChecked(): void {
    const values = this.randomValues.map(random => random.randomValue);
    this.total = values.reduce((acc, curr) => acc + curr);
  }

  focusFromComponent() {
    this.inputEmail.nativeElement.focus();
  }
}
