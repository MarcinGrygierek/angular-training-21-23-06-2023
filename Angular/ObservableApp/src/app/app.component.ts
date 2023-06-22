import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    isVisible = true;

    toggle() {
      this.isVisible = !this.isVisible;
    }

  async handlePromise() {
    const prms = new Promise((resolve, reject) => {
      const random = Math.round(Math.random() * 100);
      setTimeout(() => {
        resolve(`SUKCES PROMISE ${random}`);
      }, 2000);
     })

     setTimeout(async () => {
      const result = await prms;
      console.log(result);

      const result2 = await prms;
      console.log(result2);
    }, 1000)
  }

  handleObservable() {
    const obs = new Observable(observer => {
      setInterval(() => {
        const random = Math.round(Math.random() * 100);
        observer.next(`SUKCES OBSERVABLE ${random}`);
      }, 1000)
     });
  
     setTimeout(() => {
     obs.subscribe(val => {
      console.log(val);
     })
     obs.subscribe(val => {
      console.log(val);
     })
    }, 1000)
  }

  ngOnInit(): void {
    // this.handlePromise();
    // this.handleObservable();

 }
}
