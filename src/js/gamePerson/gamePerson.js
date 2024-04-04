export default class GamePerson {
  constructor(table, person) {
    this.table = table;
    this.person = person;
    this.previousValue = 0;
  }

  getTableCell() {
    return this.table.querySelectorAll('.cell');
  }

  randomCell() {
    return Math.floor(Math.random() * this.getTableCell().length);
  }

  addPersonInCell() {
    let valueCell = this.randomCell();
    if (this.previousValue === valueCell) {
      valueCell = this.randomCell();
    }
    const cell = this.getTableCell()[valueCell];
    const img = document.createElement('img');
    img.className = 'image';
    img.src = this.person;
    cell.appendChild(img);
    this.previousValue = valueCell;
  }

  dellPersonCell() {
    const image = this.table.querySelector('.image');
    if (image) {
      image.remove();
    }
  }
}
