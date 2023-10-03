export class Transacao {
    _quantidade;
    _valor;
    _data;
    constructor(pQuantidade, pValor, pData) {
        this._quantidade = pQuantidade,
            this._valor = pValor,
            this._data = pData;
    }
    getQuantidade() {
        return this._quantidade;
    }
    getValor() {
        return this._valor;
    }
    getData() {
        return this._data;
    }
}
