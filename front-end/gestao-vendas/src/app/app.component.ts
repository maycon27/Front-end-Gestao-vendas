import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestao-vendas';
  mostrarMenu = false;

  constructor(
    private loginService: LoginService
    ) { }


  ngOnInit(): void {
    this.loginService.mostrarMenuemitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }


  logout() {
    this.loginService.logout();
  }



}


