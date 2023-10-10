export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
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
                <td>${Negociacao.data}</td>
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
