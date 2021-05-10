import { Negociacao } from './Negociacao';

export class Negociacoes {

    // _negociacoes é um array que contém instâncias da Classe Negociacao.
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        // Devolve um novo array que é cópia do original.
        return [].concat(this._negociacoes);
    }
}