import { IProduto } from './../IProduto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produto: IProduto[] = [];
  produtoSelecionada! : IProduto;
  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    /*this.produtoService.getTodosProdutos().subscribe(
      dados => {
        this.produto = dados;
      }

    );*/
  }

}
