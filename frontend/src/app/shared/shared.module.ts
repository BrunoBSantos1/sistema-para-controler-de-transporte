import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { NgProgressModule } from '@ngx-progressbar/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { DeshboardComponent } from './deshboards/deshboard/deshboard.component';
import { CadastroPassageiroComponent } from './components/cadastroPassageiro/cadastro-passageiro/cadastro-passageiro.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ColumnOneComponent,
    DeshboardComponent,
    CadastroPassageiroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgProgressModule,
    BrowserAnimationsModule,
    BrowserModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000})
  ],
  exports: [
    ColumnOneComponent,
    CadastroPassageiroComponent
  ]
})
export class SharedModule { }
