import { ICliente } from './ICliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: ICliente[] = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getTodosClientes().subscribe(dados => this.cliente = dados);
  }


/*  getTodosClientes(){
    this.clienteService.getTodosClientes().subscribe(dados => this.cliente = dados);
  }
  getCategoriaId(){
    this.clienteService.getClienteId(1)
    .then(categoria => console.log(categoria))
    .catch(error => console.error());
  }

  adicionarCategoria(){
    const cliente: ICliente = {
      nome: "nenhuma"
    };
    this.clienteService.adicionarCliente(cliente)
    .then(cliente => console.log('categoria adicionada'))
    .catch(error => console.error());
  }

  atualizarCategoria(){
    const categoria: ICliente = {
      codigo: 6,
      nome: "nenhuma1"
    };
    this.clienteService.atualizarCliente(categoria)
    .then(cliente => console.log('categoria atualizada'))
    .catch(error => console.error());
  }

  deletarCategoria(){
    this.clienteService.deletarCliente(6);
  }
*/
}
