
const Blockchain = require('./blockchain');

// Função para imprimir os blocos
function imprimirCadeia(cadeia) {

    for (const bloco of cadeia) {

        console.log(`Índice: ${bloco.indice}`);
        console.log(`Dados: ${bloco.dados}`);
        console.log(`Hash: ${bloco.hash.slice(0, 10)}`);
        console.log('-------------------------');
    }
}

// Criando a Blockchain
const registro = new Blockchain();

// Cadastrando entregas
registro.adicionar('Entrega para Ji-Paraná; em rota');
registro.adicionar('Entrega para Ouro Preto do Oeste; em rota');
registro.adicionar('Entrega para Presidente Médici; em rota');

// Exibindo a cadeia
console.log('\n=== CADEIA DE ENTREGAS ===');

imprimirCadeia(registro.cadeia);

// Verificando validade
console.log('Blockchain válida?', registro.ehValida());

// Testando dados inválidos
console.log('\n=== TESTE DE DADOS INVÁLIDOS ===');

try {

    registro.adicionar('');

} catch (erro) {

    console.log('Erro ao cadastrar entrega:', erro.message);

}

// Testando adulteração
console.log('\n=== TESTE DE ADULTERAÇÃO ===');

registro.cadeia[1].dados = 'Entrega adulterada';

console.log('Blockchain válida?', registro.ehValida());
