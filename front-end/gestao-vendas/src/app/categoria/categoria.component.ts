import { ICategoria } from './ICategoria';
import { CategoriaService } from './categoria.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: ICategoria[] = [];
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getTodasCategorias().subscribe(dados => this.categoria = dados);
  }

  getTodasCategorias(){
    this.categoriaService.getTodasCategorias().subscribe(dados => this.categoria = dados);
  }
  getCategoriaId(){
    this.categoriaService.getCategoriaId(1)
    .then(categoria => console.log(categoria))
    .catch(error => console.error());
  }

  adicionarCategoria(){
    const categoria: ICategoria = {
      nome: "nenhuma"
    };
    this.categoriaService.adicionarCategoria(categoria)
    .then(categoria => console.log('categoria adicionada'))
    .catch(error => console.error());
  }

  atualizarCategoria(){
    const categoria: ICategoria = {
      codigo: 6,
      nome: "nenhuma1"
    };
    this.categoriaService.atualizarCategoria(categoria)
    .then(categoria => console.log('categoria atualizada'))
    .catch(error => console.error());
  }

  deletarCategoria(){
    this.categoriaService.deletarCategoria(6);
  }

}
