import { Produto } from './Produto'
import { ProdutoLiquido } from './ProdutoLiquido'
import { ProdutoPerecivel } from './ProdutoPerecivel'

import prompt from 'prompt-sync'

let teclado = prompt();
let option: number = 0;

//cria o array de objetos específico para cada tipo de produto
let produtosPereciveis: Produto[] = new Array<Produto>();
let produtosLiquidos: Produto[] = new Array<Produto>();


let nome: string;
let valor: number;
let descricao: string;
let volume: number;
let unidade: string;

while (option != 9) {
    console.log("+========= Mercadinho =============+");
    console.log("|1. Cadastrar produto líquido       ");
    console.log("|2. Cadastrar produto perecível     ");
    console.log("|3. Listar produtos líquidos        ");
    console.log("|4. Listar produtos perecíveis      ");
    console.log("|9. Sair                            ");
    console.log("+==================================+");

    option = +teclado("Escolha uma ação: ");

    switch (option) {
        case 1:
            // Para cada atributo do objeto líquido, é solicitada a entrada de dados para o usuário.
            // valores do tipo string não precisam do + no teclado() já que devem ser lidos como string e não como um number, que é o caso do option
            console.log("+========= Produto líquido =============+");

            nome = teclado("Nome do produto: ");
            valor = +teclado("Valor do produto: ");
            descricao = teclado("Descrição do produto: ");
            volume = +teclado("Volume do produto: ");
            unidade = teclado("Unidade (litros, milílitros): ");

            // Cada produto cadastrado é adicionado na listagem específica
            produtosLiquidos.push(new ProdutoLiquido(nome, valor, descricao, volume, unidade));
            
            console.log("Produto líquido cadastrado");
            break;
        case 2:
              console.log("+========= Produto perecível =============+");

              nome = teclado("Nome do produto: ");
              valor = +teclado("Valor do produto: ");
              descricao = teclado("Descrição do produto: ");
              
              produtosPereciveis.push(new ProdutoPerecivel(nome, valor, descricao, new Date()))
            
              console.log("Produto perecível cadastrado");
            break;
        case 3:
            console.log("+========= Listagem dos produtos líquidos =============+");

            if (produtosLiquidos.length > 0) {
              produtosLiquidos.map(produtoLiquido => produtoLiquido.log());
            } else {
              console.log('Não há produtos líquidos cadastrados, favor cadastrar');
            }
            break;
        case 4:
            console.log("+========= Listagem dos produtos perecíveis =============+");

            if (produtosPereciveis.length > 0) {
                produtosPereciveis.map(produtosPereciveis => produtosPereciveis.log());
              } else {
                console.log('Não há produtos perecíveis cadastrados, favor cadastrar');
              }
            break;
       
        default:
            break;
    }
}