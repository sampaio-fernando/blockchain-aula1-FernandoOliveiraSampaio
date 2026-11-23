const Bloco = require('./bloco');

class Blockchain{
    constructor(){
        //array responsável por armazenar os blocos
        this.cadeia = [];

        //criando o bloco gênese
        const blocoGenesis = new Bloco(0, 'Bloco gênese', '0');
        this.cadeia.push(blocoGenesis);
    }

    adicionar(dados){
        //recupera o último bloco da cadeia
        const ultimoBloco = this.cadeia[this.cadeia.length -1];

        //cria um novo bloco
        const novoBloco = new Bloco(
            this.cadeia.length,
            dados,
            ultimoBloco.hash
        );

        //adiciona o novo bloco ao final da cadeia
        this.cadeia.push(novoBloco); 
    }

    ehValida(){
        //percorre os blocos a partir do segundo
        for(let i = 1; i < this.cadeia.length; i++){

            const blocoAtual = this.cadeia[i];
            const blocoAnterior = this.cadeia[i - 1];

            //verifica se hash atual continua correto
            if(blocoAtual.hash !== blocoAtual.calcularHash()){
                return false;
            }
            //verifica se o bloco está ligado ao anterior
            if(blocoAtual.hashAnterior !== blocoAnterior.hash){
                return false;
            }
        }
        return true;
    }
}
module.exports = Blockchain;