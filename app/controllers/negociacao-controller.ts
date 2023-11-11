import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mesangem.view.js';
import { NegociacoesView } from '../views/negociacoes.view.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView2');
    private viewMensagem =  new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        if(negociacao.data.getDay() > 0 && negociacao.data.getDay()< 6){
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizarView();
        }else{
            this.viewMensagem.update('So é possivel informar datas referente a dias uteis');
        }

    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    
    private atualizarView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.viewMensagem.update('Inserido com sucesso');
  }
    
}

