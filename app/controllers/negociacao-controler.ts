import { Transacao } from "../models/negociacao.js";

export class NegociacaoControler {
    private data: HTMLInputElement;
    private quantidade: HTMLInputElement;
    private valor: HTMLInputElement;

    constructor() {
        this.data = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.valor = document.querySelector('#valor');
    };

    adicionar(): void {
        const negociacao = this.criarNegociacao();
        console.log(negociacao);
        this.limpaFormulario();
    };

    criarNegociacao(): Transacao {
        const quantidade = parseInt(this.quantidade.value);
        const valor = parseInt(this.valor.value);
        const exp = /-/g;
        const date = new Date(this.data.value.replace(exp, ','));

        return new Transacao(quantidade,
            valor,
            date);
    };

    limpaFormulario(): void {
        this.quantidade.value = '';
        this.valor.value = '';
        this.data.value = '';
        this.data.focus;
    }
}