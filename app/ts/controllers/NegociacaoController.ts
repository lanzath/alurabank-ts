class NegociacaoController {

  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;

  constructor() {
    // <HTMLInputElement> é o casting explícito para converter em uma tipagem mais específica
    this._inputData = <HTMLInputElement>document.querySelector('#data');
    this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
    this._inputValor = <HTMLInputElement>document.querySelector('#valor');
  }

  adiciona(event: Event): void {
    event.preventDefault();

    const negociacao = new Negociacao(
      // replace usa o regex /-/g para buscar TODOS(g) os '-' e substituí-los por ','
      new Date(this._inputData.value.replace(/-/g, ',')),

      // + converte(cast) a string para number
      +this._inputQuantidade.value,
      +this._inputValor.value
    );

    console.log(negociacao);
  }
}