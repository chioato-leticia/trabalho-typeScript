import { Produto } from "./Produto";
import { format } from 'date-fns'

export class ProdutoPerecivel extends Produto {
    private _validade: Date;

    constructor(nome: string, valor: number, descricao: string, validade: Date) {
        // Constructor da classe pai (Produto)
        super(nome, valor, descricao);
        this._validade = validade;
    }

    log(): void {
        const { _nome, _valor, _descricao, _validade } = this;

        console.log(`\nProduto perecível ${_nome}, \nvalor R$ ${_valor.toFixed(2).replace('.', ',')} \nDescrição: ${_descricao} \nData de validade: ${format(_validade, 'dd/MM/yyyy')}`);
    }
}