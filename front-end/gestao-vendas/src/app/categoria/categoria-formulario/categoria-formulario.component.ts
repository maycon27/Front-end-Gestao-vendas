import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.buildForm();

    const codigo = this.route.snapshot.params['codigo'];
    if (codigo) {
      this.preencherFormulario(codigo);
    }
  }

  buildForm() {
    this.form = this.fb.group({
      codigo: [],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  preencherFormulario(codigo: number) {
    this.categoriaService.getCategoriaId(codigo)
      .subscribe(result => {
        this.form.patchValue(result);

      },
        error => console.error(error)
      );
  }

  adicionarCategoria() {

    const categoria = this.form.value;

    if (categoria.codigo) {
      this.categoriaService.atualizarCategoria(categoria).subscribe(
        secesso => {
          this.router.navigate(['categoria'])
        },
        error => console.error(error)
      );
    } else {
      this.categoriaService.adicionarCategoria(categoria).subscribe(
        secesso => {
          this.router.navigate(['categoria'])
        },
        error => console.error(error)
      );
    }



  }
  voltar()
  {
    this.location.back();
  }

}


