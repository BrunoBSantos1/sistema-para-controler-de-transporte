import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
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
    private authService: AuthService,
    public progressBar: ProgressBarService
  ) { }

  ngOnInit(): void {
  }

  createUsuario() {
    this.progressBar.startLoading();
    const registerObserver = {
      next: x => {
        console.log('Usuário Criado com sucesso')
        this.progressBar.completeLoading();
        this.progressBar.setSuccess();
      },
      error: err => {
        this.progressBar.setError();
        console.log(err)
        this.progressBar.completeLoading();
      }
    }
    this.authService.register(this.usuario).subscribe(registerObserver);
  }

}
