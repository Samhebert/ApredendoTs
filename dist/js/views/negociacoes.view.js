import { view } from "./view.js";
export class NegociacoesView extends view {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            ${model.lista().map(Negociacao => {
            return `
                <tr>
                <td>${Intl.DateTimeFormat().format(Negociacao.data)}</td>
                <td>${Negociacao.quantidade}</td>
                <td>${Negociacao.valor}</td>
                </tr>
                `;
        }).join('')}
            </tbody>
        </table>
    `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
