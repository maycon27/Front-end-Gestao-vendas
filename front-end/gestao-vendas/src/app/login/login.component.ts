import { FormBuilder, FormGroup } from '@angular/forms';
import { IUsuario } from './IUsuario';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: IUsuario;
  form!: FormGroup
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder

    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null],
      password: [null]
    });
  }

  public login(){
    this.usuario = this.form.value;
    this.loginService.login(this.usuario);
  }

}
