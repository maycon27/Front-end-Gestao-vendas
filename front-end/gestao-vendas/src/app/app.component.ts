import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestao-vendas';


  constructor(
    private loginService: LoginService,
    ) { }

    logout(){
      this.loginService.logout();
    }
}


