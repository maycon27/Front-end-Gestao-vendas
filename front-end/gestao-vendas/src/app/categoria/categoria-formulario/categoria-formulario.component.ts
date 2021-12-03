import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-formulario',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.css'],
  preserveWhitespaces: true
})
export class CategoriaFormularioComponent implements OnInit {

   form!: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    const categoria = this.route.snapshot.data['categoria']

    this.form = this.fb.group({
      codigo: [categoria.codigo],
      nome:[categoria.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });

  }

  adicionarCategoria(){

    if(this.form.value){
      this.categoriaService.atualizarCategoria(this.form.value).subscribe(
        secesso => {
          this.location.back();
        },
        error => console.error(error)
      );
    }

    else{

    if(this.form.valid){
      this.categoriaService.adicionarCategoria(this.form.value).subscribe(
        secesso => {
          this.location.back();
        },
        error => console.error(error)
      );

    }
  }
  }

}


