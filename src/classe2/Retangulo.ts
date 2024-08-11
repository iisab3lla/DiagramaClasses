import { FormatoDeElemento } from "./FormatoDeElemento";

export class Retangulo implements FormatoDeElemento {
    comprimento: number;
    altura: number;

    constructor(comprimento: number, altura: number) {
        this.comprimento = comprimento;
        this.altura = altura;
    }

    public desenhar(){
        console.log(`\nDesenhando um retangulo de comprimento: ${this.comprimento} com altura de: ${this.altura}`);
    }

    public redimensionar(){
        console.log('Redimensionando para Retangulo!')
    }
}