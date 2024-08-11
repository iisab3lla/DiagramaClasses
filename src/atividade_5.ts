interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;

  recuperarValorTotal(): number;
}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;

}

class Pedido implements ValorPedido {
  itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  aplicarDescontoEmReais(desconto: number): void {
    console.log('Desconto aplicado!' + this.aplicarDescontoEmReais)
  }

  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return total;
  }

}

class ItemPedido implements ValorPedido {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }


  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.valor * porcentagem;
    this.valor -= descontoEmReais;
  } 

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }
}
