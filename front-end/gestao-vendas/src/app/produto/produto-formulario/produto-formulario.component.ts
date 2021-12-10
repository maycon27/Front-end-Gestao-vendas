import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produto-formulario',
  templateUrl: './produto-formulario.component.html',
  styleUrls: ['./produto-formulario.component.css']
})
export class ProdutoFormularioComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private produtoService: ProdutoService,
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
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
      codigo: [null],
      descricao: [null,  [Validators.required]],
      observacao: [null,  [Validators.required]],
      quantidade:[null,  [Validators.required]],
      precoCusto:[null,  [Validators.required]],
      precoVenda:[null,  [Validators.required]],
      codigoCategoria:[null]


  })
}

  preencherFormulario(codigo: number){

    const produto = this.form.value;
    this.produtoService.getProdutoId(codigo).subscribe(result => {
      this.form.patchValue(result);
    },
      error => console.error(error)
    );
  }

  adicionarProduto(){
    const produto = this.form.value;

    if (produto.codigo) {
      this.produtoService.atualizarProduto(produto).subscribe(
        secesso => {
          this.location.back();
        },
        error => console.error(error)
      );
    }
    else{
    this.produtoService.adicionarProduto(produto).subscribe(
      secesso => {
        this.location.back();
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
