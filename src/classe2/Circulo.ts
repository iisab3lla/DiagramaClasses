import { FormatoDeElemento } from "./FormatoDeElemento";


export class Circulo implements FormatoDeElemento{
    raio: number;

    constructor(raio: number){
        this.raio = raio;
    }

    public desenhar(): void{
        console.log(`\n\nDesenhando um circulo com um raio ${this.raio}`);
    }

    public redimensionar(): void {
        console.log(`Redimensionando para Circulo`);
    }
}