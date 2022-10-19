"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player, player2) {
        super(player);
        this._player = player;
        this._player2 = player2;
    }
    fight() {
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
exports.default = PVP;
