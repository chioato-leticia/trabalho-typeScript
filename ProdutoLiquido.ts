import { Produto } from "./Produto";

export class ProdutoLiquido extends Produto {
    public _volume: number;
    public _unidade: string;

    constructor(nome: string, valor: number, descricao: string, volume: number, unidade: string) {
        // Constructor da classe pai (Produto)
        super(nome, valor, descricao);
        this._volume = volume;
        this._unidade = unidade;
    }

    log(): void {
        const { _nome, _valor, _descricao, _volume, _unidade } = this;

        console.log(`\nProduto liquido ${_nome}, \nvalor R$ ${_valor.toFixed(2).replace('.', ',')} \nDescrição: ${_descricao} \nQuantidade: ${_volume} ${_unidade}`);
    }

    
    getVolume(): void {
        const { _volume, _unidade } = this;

        console.log(`${_volume} ${_unidade}`);
    }
}