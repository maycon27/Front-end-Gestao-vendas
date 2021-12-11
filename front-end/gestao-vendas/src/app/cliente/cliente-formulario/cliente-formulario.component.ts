import { ClienteService } from './../cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.css']
})
export class ClienteFormularioComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.buildForm();
    const codigo = this.route.snapshot.params['codigo'];
    console.log(codigo)
    if (codigo) {
      this.preencherFormulario(codigo);
    }

  }

  buildForm(){

    this.form = this.fb.group({
      codigo:[null],
      nome:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      telefone: [null, [Validators.required]],
      ativo:['true', [Validators.required]],

      enderecoDto: this.fb.group({
      logradouro:[null, [Validators.required]],
      numero:[null, [Validators.required]],
      complemento:[null],
      bairro: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      estado: [null, [Validators.required]]
      })
    })
  }

  preencherFormulario(codigo: number) {
    this.clienteService.getClienteId(codigo)
      .subscribe(result => {
        this.form.patchValue(result);

      },
        error => console.error(error)
      );
  }

  adicionarCliente(){

    const cliente = this.form.value;

    if (cliente.codigo) {
      this.clienteService.atualizarCliente(cliente).subscribe(
        secesso => {
          this.router.navigate(['cliente'])
        },
        error => console.error(error)
      );
    }

    else {
      this.clienteService.adicionarCliente(cliente).subscribe(
        secesso => {
          this.router.navigate(['cliente'])
        },
        error => console.error(error)
      );
    }
  }

  voltar()
  {
    this.router.navigate(['cliente'])
  }
}
