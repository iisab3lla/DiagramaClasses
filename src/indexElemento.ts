import { Circulo } from "./classe2/Circulo";
import { Retangulo } from "./classe2/Retangulo";


const novoCirculo = new Circulo (
    3.14
)

novoCirculo.desenhar();
novoCirculo.redimensionar();

const novoRetangulo = new Retangulo (
    20.0,
    10.0
)

novoRetangulo.desenhar();
novoRetangulo.redimensionar();