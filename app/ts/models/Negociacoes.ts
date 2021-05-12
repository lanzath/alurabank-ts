import { Negociacao } from './Negociacao';
import { Imprimivel } from './Imprimivel';

export class Negociacoes implements Imprimivel {

    // _negociacoes é um array que contém instâncias da Classe Negociacao.
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        // Devolve um novo array de Negociacao que é cópia do original.
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log('Impressão');
        console.log(JSON.stringify(this._negociacoes));
    }
}