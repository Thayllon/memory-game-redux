class ListBuilder {
  constructor(list) {
    this.list = list || [];
  }

  createList(total) {

    const createListLoop = keyPrefix => {
      for (let i = 1; i <= total; i += 1) {
        this.list.push({
          id: i,
          key: `${keyPrefix} - ${i}`,
          name: `Carta ${i}`,
          isActive: false,
          hasMatch: false
        });
      }
    };

    createListLoop(1);
    createListLoop(2);

    return this;
  }

  //Método para embaralhar as cartas
  shuffle() {
    const newList = this.list.slice();

    //loop ao contrário pegando o tamanho indo ate o indice 1
    for (let i = newList.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newList[i], newList[j]] = [newList[j], newList[i]];
    }

    this.list = newList;
    return this;
  }

  build() {
    return this.list;
  }
}

export default ListBuilder;