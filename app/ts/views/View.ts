// Classe view utiliza uma tipagem genérica T
// Uma classe abstrata não permite que esta seja instanciada.
export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false) {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

	update(modelo: T): void {
        let template = this.template(modelo);

        if (this._escapar) {
            // Caso queira remover qualquer tipo de script injetado no código, substitui por uma string vazia o script
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }

        this._elemento.html(template);
    }

    // Método abstrata não tem implementação, o método recebe um modelo genérico
    // e devolve uma string, e quem herdar este método é obrigado a sobrescrever o método
    abstract template(modelo: T): string;
}