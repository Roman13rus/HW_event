import GamePerson from './gamePerson/gamePerson';
import GameClient from './clientGame/clientGame';
import '../css/index.css';
import hero from './gamePerson/img/goblin.png';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.playing-field');
  const person = new GamePerson(table, hero);
  const game = new GameClient(table);
  const raund = setInterval(() => {
    person.dellPersonCell();
    person.randomCell();
    person.addPersonInCell();
    if (game.conterClick === 0) {
      game.counterLose++;
    }
    game.conterClick = 0;
    if (game.counterLose === 5) {
      clearInterval(raund);
      game.outputGameResult();
      person.dellPersonCell();
    }
  }, 1000);
});
