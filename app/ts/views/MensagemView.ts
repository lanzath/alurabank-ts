// Ao extender métodos da classe pai View, utiliza o tipo string.
class MensagemView extends View<string> {

    public template(modelo: string): string {
        return `<p class="alert alert-info">${modelo}</p>`
    }
}