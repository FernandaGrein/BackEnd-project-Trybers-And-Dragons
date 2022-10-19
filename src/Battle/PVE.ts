import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _fighter: Fighter;
  private _enemy: Array<Fighter | SimpleFighter>;

  constructor(fighter: Fighter, enemy: Array<Fighter | SimpleFighter>) {
    super(fighter);
    this._fighter = fighter;
    this._enemy = enemy;
  }

  fight(): number {
    this._enemy.forEach((char) => {
      while (this._fighter.lifePoints !== -1 || char.lifePoints !== -1) {
        this._fighter.attack(char);
        char.attack(this._fighter);
        // if (this._fighter.lifePoints === -1 || char.lifePoints === -1) {
        //   break;
        // }
      }
    });
    return super.fight();
  }
}