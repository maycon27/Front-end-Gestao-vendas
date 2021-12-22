import { IProduto } from './../produto/IProduto';


export interface IVendasItens{
  codigo?: number;
  produtoDescricao: string;
  quantidade: number;
  precoVendido: number;
  pagamentoVista: number;
  pagamentoPrazo: number;
}
