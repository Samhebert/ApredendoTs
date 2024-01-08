export function escape(
    target : any,
    propertyKey: String,
    descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log(`@escape operando na função: ${this.constructor.name}`);

        let retorno = metodoOriginal.apply(this, args);

        if(typeof retorno === 'string'){
            retorno = retorno
            .replace(/<script>[\s\S]*?<\/script>/, '');;
        }

        return retorno;
    }

    return descriptor;
}