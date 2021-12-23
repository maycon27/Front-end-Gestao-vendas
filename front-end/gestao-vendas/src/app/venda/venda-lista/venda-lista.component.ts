import { IVendas } from './../IVendas';
import { VendaService } from './../venda.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venda-lista',
  templateUrl: './venda-lista.component.html',
  styleUrls: ['./venda-lista.component.css']
})
export class VendaListaComponent implements OnInit {

  venda: IVendas[] = [];
  vendaSelecionada!: IVendas;
  constructor(
    private vendasService: VendaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vendasService.getTodasVenda().subscribe(dados => {
      this.venda = dados;
      console.log(this.venda)
    });
  }

  detalheVenda(codigo: number){
    this.router.navigate([`venda/detalhe`, codigo])
  }

  deletarVenda(venda: IVendas){
    this.vendaSelecionada = venda;
    this.vendasService.deletarVenda(this.vendaSelecionada.codigo!).subscribe(
      sucesso =>  this.vendasService.getTodasVenda().subscribe(dados => this.venda = dados));
  }

}
