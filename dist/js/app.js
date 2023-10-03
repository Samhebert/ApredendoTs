import { NegociacaoControler } from "./controllers/negociacao-controler.js";
const controler_negociacao = new NegociacaoControler;
const form = document.querySelector(".form");
form.addEventListener('submit', event => {
    event.preventDefault();
    controler_negociacao.adicionar();
});
