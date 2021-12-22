import { IVendas } from './IVendas';
import { ICliente } from './../cliente/ICliente';


export interface IClienteVendas{
  nome: string;
  vendaResponseDTO: IVendas[];
}
