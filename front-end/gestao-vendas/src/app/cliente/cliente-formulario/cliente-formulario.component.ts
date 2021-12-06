import { enderecoDto } from './../ICliente';
import { ClienteService } from './../cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

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

  adicionarCliente(){
    console.log(this.form.value);
    if(this.form.valid){

      this.clienteService.adicionarCliente(this.form.value).subscribe(
        secesso => {
          this.location.back();
        },
        error => console.error(error)
      );

    }
  }
}
