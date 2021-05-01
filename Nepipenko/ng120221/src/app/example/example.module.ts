import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';



@NgModule({
  declarations: [ExampleComponent],
  exports: [
    ExampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExampleModule { }
