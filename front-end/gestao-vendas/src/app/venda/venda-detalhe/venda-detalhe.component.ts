import { VendaService } from './../venda.service';
import { IVendas } from './../IVendas';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-venda-detalhe',
  templateUrl: './venda-detalhe.component.html',
  styleUrls: ['./venda-detalhe.component.css']
})
export class VendaDetalheComponent implements OnInit {

  venda!: IVendas;

  constructor(
    private vendaService: VendaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const codigo = this.route.snapshot.params['codigo'];
    this.vendaService.getVendaId(codigo).subscribe(dados => {this.venda = dados;})
  }

  voltar()
  {
    this.router.navigate(['venda'])
  }
}
