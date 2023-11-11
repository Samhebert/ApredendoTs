export abstract class view<T> {
    protected elemento: HTMLElement;
    private tst: string;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
        console.log(template);
    }
    
    protected abstract template(model: T): string;
}