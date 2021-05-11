import { Negociacao, Negociacoes } from '../models/index';
import { MensagemView, NegociacoesView } from '../views/index';
import { domInject } from '../helpers/decorators/index';

export class NegociacaoController {

	@domInject('#data')
    private _inputData: JQuery;

	@domInject('#quantidade')
    private _inputQuantidade: JQuery;

	@domInject('#valor')
	private _inputValor: JQuery;

	private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        // Ao instanciar o controller renderiza os dados baseado nas negociações.
        this._negociacoesView.update(this._negociacoes);
    }

	adiciona(event: Event): void {
        event.preventDefault();

        // replace usa o regex /-/g para buscar TODOS(g) os '-' e substituí-los por ','
        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis.');
            return
        }

        const negociacao = new Negociacao(
            data,

            // + converte(cast) a string para number
            +this._inputQuantidade.val(),
            +this._inputValor.val()
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private _ehDiaUtil(data: Date): boolean {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
