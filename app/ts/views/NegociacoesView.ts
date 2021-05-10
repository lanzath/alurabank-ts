import { View } from './View';
import { Negociacoes } from '../models/Negociacoes';

// Ao extender métodos da classe pai View, utiliza o tipo Negociacoes.
export class NegociacoesView extends View<Negociacoes> {

    template(modelo: Negociacoes): string {
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
                    ${modelo.paraArray().map(negociacao =>
                        `
                        <tr>
                            <td>${negociacao.data.toLocaleDateString()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume }</td>
                        </tr>
                        `
                    ).join('')}
                </tbody>

                <tfoot></tfoot>
            </table>
        `;
    }
}