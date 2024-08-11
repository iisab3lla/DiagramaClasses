import { computadorD } from "./classes3/djonathanPC";
import { computadorI } from "./classes3/isabellaPC";

const PC1 = new computadorD (
    "Gaming Master"
);

PC1.processador();
PC1.placaMae();
PC1.memRam();
PC1.placaDeVideo();
PC1.fonte();
PC1.adicional();

const PC2 = new computadorI (
    "Rise Mode"
);

PC2.processador();
PC2.placaMae();
PC2.memRam();
PC2.placaDeVideo();
PC2.fonte();
PC2.adicional();