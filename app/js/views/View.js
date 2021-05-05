// Classe view utiliza uma tipagem genérica T
// Uma classe abstrata não permite que esta seja instanciada.
class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }
}
