import { configsPC } from "./ConfigPC";

export class computadorI implements configsPC {
    public waterCooler: string;

    constructor(waterCooler: string){
        this.waterCooler =  waterCooler;
    }

    public processador(): void {
        console.log(`\nConfigurações do Computador:\n\n- Processador: i5`);
    }

    public placaMae(): void {
        console.log(`- Placa-Mãe: Gigabyte`);
    }

    public memRam(): void {
        console.log(`- Memória RAM: 2x8GB`);
    }

    public fonte(): void {
        console.log(`- Fonte: 700w`);
    }

    public placaDeVideo(): void {
        console.log(`- Placa de Vídeo: GTX 1660 super`);
    }

    public adicional(): void {
        console.log(`WaterCooler: ${this.waterCooler}`);
    }
}