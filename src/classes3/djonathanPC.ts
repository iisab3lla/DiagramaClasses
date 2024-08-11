import { configsPC } from "./ConfigPC";

export class computadorD implements configsPC {
    public caixaDeSom: string;

    constructor(caixaDeSom: string){
        this.caixaDeSom = caixaDeSom
    }

    public processador(): void {
        console.log(`\nConfigurações do Computador:\n\n- Processador: i9`);
    }

    public placaMae(): void {
        console.log(`- Placa-Mãe: Gigabyte`);
    }

    public memRam(): void {
        console.log(`- Memória RAM: 2x8GB`);
    }

    public fonte(): void {
        console.log(`- Fonte: 850w Plus`);
    }

    public placaDeVideo(): void {
        console.log(`- Placa de Vídeo: GTX 1660 super`);
    }

    public adicional(): void {
        console.log(`- Caixa de Som: ${this.caixaDeSom}`);
    }
}