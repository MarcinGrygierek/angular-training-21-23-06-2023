import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, mergeMap, map, debounceTime, distinctUntilChanged, switchMap, exhaustMap } from 'rxjs';
import { FormBuilder } from '@angular/forms';

interface Show {
  show: {
    name: string;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  results!: Observable<string[]>;

  form = this.fb.group({
    search: ['']
  })

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.results = this.form.controls.search.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      exhaustMap(search => this.http.get<Show[]>(`https://api.tvmaze.com/search/shows?q=${search}`)),
      map(result => result.map(show => show.show.name))
    )
  }

  ngOnDestroy(): void {
    
  }
}
