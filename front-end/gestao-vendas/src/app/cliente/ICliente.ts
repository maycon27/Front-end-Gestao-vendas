export interface ICliente{
  codigo?: number;
  nome: string;
  telefone: string;
  ativo: boolean;
  endereco: enderecoDto;
}

export interface enderecoDto{
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cep: string;
  cidade:string;
  estado:string;
}
