class Negociacoes {
    constructor() {
        // _negociacoes é um array que contém instâncias da Classe Negociacao.
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        // Devolve um novo array que é cópia do original.
        return [].concat(this._negociacoes);
    }
}
