class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        // <HTMLInputElement> é o casting explícito para converter em uma tipagem mais específica
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        // Ao instanciar o controller renderiza os dados baseado nas negociações.
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(
        // replace usa o regex /-/g para buscar TODOS(g) os '-' e substituí-los por ','
        new Date(this._inputData.value.replace(/-/g, ',')), 
        // + converte(cast) a string para number
        +this._inputQuantidade.value, +this._inputValor.value);
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
    }
}
