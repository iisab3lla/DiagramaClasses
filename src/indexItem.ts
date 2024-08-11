import Item, { DataItem } from "./classes/Item";
import Pedido, { DataPedido } from "./classes/Pedido";

const item1: DataItem = {
  valor: 141.50,
  nome: "Keune",
  descricao: "Tinta clareadora",
};

const item2: DataItem = {
  valor: 25.23,
  nome: "Keune - Água oxigenada",
  descricao: "OX40",
};

const novoItem = new Item(item1);

console.log(novoItem.getItem);

const pedido1: DataPedido = {
    items: [item1, item2],
    valorTotal: 0
};


const novoPedido = new Pedido(pedido1);

novoPedido.listarPedidos;