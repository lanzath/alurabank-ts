class NegociacaoController {

  private _inputData: JQuery;
  private _inputQuantidade: JQuery;
  private _inputValor: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    // Ao instanciar o controller renderiza os dados baseado nas negociações.
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event): void {
    event.preventDefault();

    const negociacao = new Negociacao(
      // replace usa o regex /-/g para buscar TODOS(g) os '-' e substituí-los por ','
      new Date(this._inputData.val().replace(/-/g, ',')),

      // + converte(cast) a string para number
      +this._inputQuantidade.val(),
      +this._inputValor.val()
    );

    this._negociacoes.adiciona(negociacao);

    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
  }
}
