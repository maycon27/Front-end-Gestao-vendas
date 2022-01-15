import { FormBuilder, FormGroup } from '@angular/forms';
import { IUsuario } from './IUsuario';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    private fb: FormBuilder,
    private router: Router

    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null],
      password: [null]
    });
  }

  get f(){ return this.form.controls}

  public login(){
    console.log(this.f.username.value, this.f.password.value)
    this.loginService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigateByUrl('/categoria')
      },
      error => console.error(error)

    )


  }

}
