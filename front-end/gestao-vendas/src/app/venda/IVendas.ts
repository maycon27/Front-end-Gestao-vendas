import { IVendasItens } from './IVendasItem';

export interface IVendas{
  codigo?: number;
  data: Date;
  ativo:Boolean;
  nomeVendedor: String;
  nomeCliente: String;
  itemVendaResponseDTO: IVendasItens[];

}
