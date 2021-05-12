import { Negociacao, Negociacoes, NegociacaoParcial } from '../models/index';
import { MensagemView, NegociacoesView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/index';

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

    private _service = new NegociacaoService();

    constructor() {
        // Ao instanciar o controller renderiza os dados baseado nas negociações.
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
	adiciona(): void {

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
        imprime(negociacao, this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private _ehDiaUtil(data: Date): boolean {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    importaDados(): void {

        this._service
            .obterNegociacoes(res => {
                if (res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(negociacoes => {
                negociacoes.forEach(negociacao =>
                    this._negociacoes.adiciona(negociacao))

                this._negociacoesView.update(this._negociacoes)
            });
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
