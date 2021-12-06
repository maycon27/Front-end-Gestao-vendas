import { ICategoria } from './../categoria/ICategoria';

export interface IProduto{
  codigo?: number;
  descricao: string;
  quantidade: number;
  precoCusto: number;
  precoVenda: number;
  categoria: ICategoria;
}
