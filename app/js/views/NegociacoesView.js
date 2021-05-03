class NegociacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }
    template(modelo) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${modelo.paraArray().map(negociacao => `
                        <tr>
                            <td>${negociacao.data.toLocaleDateString()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                        `).join('')}
                </tbody>

                <tfoot></tfoot>
            </table>
        `;
    }
}
