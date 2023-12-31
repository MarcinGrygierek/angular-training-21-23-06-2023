import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { CounterComponent } from './counter/counter.component';
import { TabTemplateComponent } from './tab-template/tab-template.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    CounterComponent,
    TabTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
