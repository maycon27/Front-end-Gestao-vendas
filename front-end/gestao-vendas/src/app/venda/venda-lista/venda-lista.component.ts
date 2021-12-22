import { IClienteVendas } from './../IClienteVenda';
import { VendaService } from './../venda.service';
import { IVendasItens } from './../IVendasItem';
import { Component, OnInit } from '@angular/core';
import { IVendas } from '../IVendas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venda-lista',
  templateUrl: './venda-lista.component.html',
  styleUrls: ['./venda-lista.component.css']
})
export class VendaListaComponent implements OnInit {

  venda!: IClienteVendas;
  constructor(
    private vendasService: VendaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const codigo = this.route.snapshot.params['codigo'];

    this.vendasService.getVendaCliente(codigo).subscribe((dados) => {
      this.venda = dados;
      console.log(this.venda)
    });
  }

}
