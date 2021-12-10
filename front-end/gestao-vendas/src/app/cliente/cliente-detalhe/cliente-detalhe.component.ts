import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ICliente } from '../ICliente';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {
  cliente! : ICliente;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const codigo = this.route.snapshot.params['codigo'];
    this.clienteService.getClienteId(codigo).subscribe(dados => {this.cliente = dados;})
  }

  voltar()
  {
    this.location.back();
  }
}
