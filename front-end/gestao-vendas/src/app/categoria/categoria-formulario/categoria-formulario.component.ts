import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ICategoria } from '../ICategoria';

@Component({
  selector: 'app-categoria-formulario',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.css']
})
export class CategoriaFormularioComponent implements OnInit {

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {

  }
  adicionarCategoria(){
    const categoria: ICategoria = {
      nome: "nenhuma"
    };
    this.categoriaService.adicionarCategoria(categoria)

  }
}
