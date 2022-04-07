import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario = {
    name: '',
    sobrenome: '',
    cpf: '',
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  createUsuario() {
    const registerObserver = {
      next: x => console.log('Usuário Criado com sucesso'),
      error: err => console.log(err)
    }
    this.authService.register(this.usuario).subscribe(registerObserver);
  }

}
