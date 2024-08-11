// import Item from "./Item";
import { DataItem } from "./Item";

export interface DataPedido {
  items: DataItem[];
  valorTotal: number;
}

export default class Pedido {
  items: DataItem[];
  valorTotal: number;

  constructor(parametro: DataPedido) {
    this.items = parametro.items;
    this.valorTotal = parametro.valorTotal
    this.somarValor();
  }

  public set adicionarItem(parametro: DataPedido) {
    if (parametro.items.length === 0) {
      throw new Error("Não existe itens no pedido");
    }
    this.items = parametro.items;
    this.somarValor();
  }

  private somarValor() {
    this.valorTotal = this.items.reduce((total, item) => total + item.valor, 0);
  }

  public get listarPedidos() {
    const dataPedido: DataPedido = {
      items: this.items,
      valorTotal: this.valorTotal,
    };

    const respostaGet = console.log(dataPedido);

    return respostaGet;
  }
}