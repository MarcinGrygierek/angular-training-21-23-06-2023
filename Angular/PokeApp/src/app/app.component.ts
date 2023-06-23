import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, exhaustMap, from, map, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const ids = [1, 2, 3, 4, 5, 6];

    from(ids)
    .pipe(
      exhaustMap(id => this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
    )
    .subscribe(val => {
      console.log(val);
    })
  }
}
