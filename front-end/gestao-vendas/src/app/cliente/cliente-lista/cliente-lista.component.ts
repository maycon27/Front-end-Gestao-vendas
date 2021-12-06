import { ICliente } from './../ICliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  cliente: ICliente[] = [];
  categoriaSelecionada! : ICliente;
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clienteService.getTodosClientes().subscribe(
      dados => {
        this.cliente = dados;
      }

    );
  }

}