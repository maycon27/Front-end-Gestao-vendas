import { IVendasItens } from './IVendasItem';

export interface IVendas{
  codigo?: number;
  data: Date;
  nomeVendedor: String;
  nomeCliente: String;
  itemVendaResponseDTO: IVendasItens[];

}
