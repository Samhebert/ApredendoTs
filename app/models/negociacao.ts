export class Transacao{
    private _quantidade: number;
    private _valor: number;
    private _data: Date;

    constructor(pQuantidade: number, pValor: number, pData: Date){
        this._quantidade = pQuantidade,
        this._valor = pValor,
        this._data = pData
    }
 
    public getQuantidade(): number{
        return this._quantidade
    }

    
    public getValor(): number{
        return this._valor
    }

    
    public getData(): Date{
        return this._data
    }
}
