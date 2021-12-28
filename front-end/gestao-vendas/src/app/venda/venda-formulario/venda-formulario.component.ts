import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-venda-formulario',
  templateUrl: './venda-formulario.component.html',
  styleUrls: ['./venda-formulario.component.css']
})
export class VendaFormularioComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private vendaService: VendaService,
    private fb: FormBuilder,
    private router: Router
  ) {

   }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){

    this.form = this.fb.group({
      codigo: [null],
      data: [null,[Validators.required]],
      codigoVendedor: [null,[Validators.required]],
      codigoCliente: [null,[Validators.required]],
      ativo:['true', [Validators.required]],
      itensVendaDto: this.fb.array([]),
    });
  }

  novoItensVenda(): FormGroup{
    return this.fb.group({
      codigoProduto: [null, [Validators.required]],
      quantidade:[null,[Validators.required]],
      precoVendido: [null, [Validators.required]],
      pagamentoVista: [null,[Validators.required]],
      pagamentoPrazo: [null,[Validators.required]]
    });
  }

  get itensVendaDto(): FormArray{
    return this.form.get('itensVendaDto') as FormArray;
  }


  inserirItens(){
    this.itensVendaDto.push(this.novoItensVenda());
  }

  adicionarVenda(){

    const venda = this.form.value;
    console.log(venda)

    this.vendaService.adicionarVenda(venda).subscribe(
      secesso => {
        this.router.navigate(['venda'])
      },
      error => console.error(error)
    );
  }
}
