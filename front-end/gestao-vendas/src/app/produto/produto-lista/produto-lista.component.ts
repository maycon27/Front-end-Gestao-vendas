import { ICategoria } from 'src/app/categoria/ICategoria';
import { IProduto } from './../IProduto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produto: IProduto[] = [];
  produtoSelecionada! : IProduto;
  cat!: ICategoria[] [];

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {

    this.produtoService.getTodosProdutos().subscribe(
      dados => {
        this.produto = dados;
      }
    );
  }

  atualizarProduto(codigo: number){
    this.router.navigate([`produto/editar`, codigo])
  }
  deletarProduto(prod: IProduto){
    this.produtoSelecionada = prod;
    this.produtoService.deletarProduto(this.produtoSelecionada.codigo!).subscribe(
      sucesso =>  this.produtoService.getTodosProdutos().subscribe(dados => this.produto = dados)
    );
  }
}
