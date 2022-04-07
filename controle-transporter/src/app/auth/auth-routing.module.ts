import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetePassawordComponent } from './components/resete-passaword/resete-passaword.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-passaword', component: ResetePassawordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
