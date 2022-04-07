import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ColumnOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ColumnOneComponent
  ]
})
export class SharedModule { }
