class NegociacaoController {
    constructor() {
        // <HTMLInputElement> é o casting explícito para converter em uma tipagem mais específica
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(
        // replace usa o regex /-/g para buscar TODOS(g) os '-' e substituí-los por ','
        new Date(this._inputData.value.replace(/-/g, ',')), 
        // + converte(cast) a string para number
        +this._inputQuantidade.value, +this._inputValor.value);
        console.log(negociacao);
    }
}
