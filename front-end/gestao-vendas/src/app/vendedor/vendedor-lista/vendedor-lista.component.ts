import { VendedorService } from './../vendedor.service';
import { IVendedor } from './../IVendedor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-lista',
  templateUrl: './vendedor-lista.component.html',
  styleUrls: ['./vendedor-lista.component.css']
})
export class VendedorListaComponent implements OnInit {

  vendedor: IVendedor[] = [];
  vendedorSelecionado! : IVendedor;

  constructor(
    private vendedorService: VendedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vendedorService.getTodosVendedores().subscribe(dados => this.vendedor = dados);
  }

  atualizarVendedor(codigo: number){
    this.router.navigate(['vendedor/editar', codigo])

  }

  deletarVendedor(vendedor: IVendedor){
    this.vendedorSelecionado = vendedor;
    this.vendedorService.deletarVendedor(this.vendedorSelecionado.codigo).subscribe(
      sucesso =>  this.vendedorService.getTodosVendedores().subscribe(dados => this.vendedor = dados));

  }

}
