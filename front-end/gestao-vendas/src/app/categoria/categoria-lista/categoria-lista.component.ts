import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ICategoria } from 'src/app/categoria/ICategoria';
import { CategoriaService } from '../categoria.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  categoria: ICategoria[] = [];
  categoriaSelecionada! : ICategoria;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.categoriaService.getTodasCategorias().subscribe(dados => this.categoria = dados);
  }

  atualizarCategoria(codigo: any){
    this.router.navigate(['categoria/editar', codigo])

  }

  deletarCategoria(cat: any){
    this.categoriaSelecionada = cat;
    this.categoriaService.deletarCategoria(this.categoriaSelecionada.codigo).subscribe(
      sucesso => location.reload()
    );
  }
}
