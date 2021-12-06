import { ICategoria } from './ICategoria';
import { CategoriaService } from './categoria.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {

  }


}
