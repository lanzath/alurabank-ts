// Ao extender métodos da classe pai View, utiliza o tipo string.
class MensagemView extends View {
    template(modelo) {
        return `<p class="alert alert-info">${modelo}</p>`;
    }
}
