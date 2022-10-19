import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player: Fighter;
  private _player2: Fighter;
    
  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player = player;
    this._player2 = player2;
  }

  fight(): number {
    const maxLifePoint = this._player.lifePoints > this._player2
      .lifePoints ? this._player.lifePoints : this._player2.lifePoints;

    for (let i = 0; i < maxLifePoint; i += 1) {
      this._player.attack(this._player2);  
      this._player2.attack(this._player);
      if (this._player.lifePoints === -1 || this._player2.lifePoints === -1) {
        break;
      }
    }
    return super.fight();
  }
}