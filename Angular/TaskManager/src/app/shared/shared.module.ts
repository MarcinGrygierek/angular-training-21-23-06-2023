import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PageContainerComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
