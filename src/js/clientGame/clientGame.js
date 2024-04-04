export default class GameClient {
  constructor(table) {
    this.table = table;
    this.conterClick = 0;
    this.counterWin = 0;
    this.counterLose = 0;
    this.getGameResult = this.getGameResult.bind(this);
    this.outputGameResult = this.outputGameResult.bind(this);
    this.onclickCell = this.onclickCell.bind(this);
    this.table.addEventListener('click', this.onclickCell);
  }

  onclickCell(e) {
    while (this.conterClick < 1) {
      if (!e.target.hasChildNodes() && e.target.classList.contains('cell')) {
        this.counterLose++;
        this.conterClick++;
      } else if (e.target.classList.contains('image')) {
        this.counterWin++;
        this.conterClick++;
      } else if (e.target.children && e.target.children[0].classList.contains('image')) {
        this.counterWin++;
        this.conterClick++;
      }
    }
  }

  getGameResult() {
    return {
      counterWin: this.counterWin,
      counterLose: this.counterLose,
    };
  }

  outputGameResult() {
    const res = this.getGameResult();
    if (res.counterLose === 5) {
      const div = document.createElement('div');
      div.className = 'banner';
      div.textContent = 'Вы проиграли';
      this.table.insertAdjacentElement('beforebegin', div);
    } else if (res.counterWin === 5) {
      const div = document.createElement('div');
      div.className = 'banner';
      div.textContent = 'Вы выиграли';
      this.table.insertAdjacentElement('beforebegin', div);
    }
  }
}
