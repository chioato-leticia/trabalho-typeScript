export abstract class Produto {
  public _nome: string;
  public _valor: number;
  public _descricao: string;
 
  constructor(nome: string, valor: number, descricao:string) {
      this._nome = nome;
      this._valor = valor;
      this._descricao = descricao;
  }

  abstract log(): void;
}