import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetePassawordComponent } from './components/resete-passaword/resete-passaword.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetePassawordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ResetePassawordComponent
  ]
})
export class AuthModule { }
