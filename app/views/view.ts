export class view{
    protected elemento: HTMLElement;
    private tst: string;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }
}