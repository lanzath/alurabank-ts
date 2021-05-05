// Classe view utiliza uma tipagem genérica T
// Uma classe abstrata não permite que esta seja instanciada.
abstract class View<T> {
    protected _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(modelo: T): void {
        this._elemento.innerHTML = this.template(modelo);
    }

    // Método abstrata não tem implementação, o método recebe um modelo genérico
    // e devolve uma string, e quem herdar este método é obrigado a sobrescrever o método
    abstract template(modelo: T): string;
}