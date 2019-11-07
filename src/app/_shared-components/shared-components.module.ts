import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerySimpleGridComponent } from './grid/very-simple-grid.component';
import { DirectivesModule } from '../_directives/directives.module';



@NgModule({
  declarations: [
    VerySimpleGridComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    VerySimpleGridComponent
  ]
})
export class SharedComponentsModule { }
