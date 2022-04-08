import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { NgProgressModule } from '@ngx-progressbar/core';



@NgModule({
  declarations: [
    HeaderComponent,
    ColumnOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgProgressModule
  ],
  exports: [
    ColumnOneComponent
  ]
})
export class SharedModule { }
