const crypto = require('crypto');

class Bloco {
    constructor(indice, dados, hashAnterior){

        //validação do índice
        if(typeof dados !== 'string' || !Number.isFinite(indice)){
            throw new Error('O índice deve ser um número válido.');
        }

        //validação dos dados
        if(typeof dados!== 'string' || dados.trim().length === 0){
            throw new Error('Os dados do bloco são obrigatórios.');
        }

        if(dados.length < 3){
            throw new Error('Os dados devem possuir no mínimo 3 caracteres.');
        }

        if(dados.length > 80){
            throw new Error('Os dados devem possuir no máximo 80 caracteres.');
        }

        //validação do hash anterior
        if(typeof hashAnterior !== 'string'){
            throw new Error('O hash anterior deve ser uma string');
        }

        this.indice = indice;
        this.dados = dados;
        this.hashAnterior = hashAnterior;

        //calcula o hash do próprio bloco
        this.hash = this.calcularHash();
    }

    calcularHash(){
        const texto = `${this.indice}${this.dados}${this.hashAnterior}`;

        return crypto.createHash('sha256')
        .update(texto)
        .digest('hex');
    }
    
}

module.exports = Bloco;