import { VendedorService } from './../vendedor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-formulario',
  templateUrl: './vendedor-formulario.component.html',
  styleUrls: ['./vendedor-formulario.component.css']
})
export class VendedorFormularioComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private vendedorService: VendedorService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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
    this.vendedorService.getVendedorId(codigo)
      .subscribe(result => {
        this.form.patchValue(result);

      },
        error => console.error(error)
      );
  }

  adicionarVendedor() {

    const vendedor = this.form.value;

    if (vendedor.codigo) {
      this.vendedorService.atualizarVendedor(vendedor).subscribe(
        secesso => {
          this.router.navigate(['vendedor'])
        },
        error => console.error(error)
      );
    } else {
      this.vendedorService.adicionarVendedor(vendedor).subscribe(
        secesso => {
          this.router.navigate(['vendedor'])
        },
        error => console.error(error)
      );
    }



  }
  voltar()
  {
    this.router.navigate(['vendedor'])
  }

}
