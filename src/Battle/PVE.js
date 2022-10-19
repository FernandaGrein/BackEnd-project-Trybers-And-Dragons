"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(fighter, enemy) {
        super(fighter);
        this._fighter = fighter;
        this._enemy = enemy;
    }
    fight() {
        this._enemy.forEach((char) => {
            while (this._fighter.lifePoints !== -1 || char.lifePoints !== -1) {
                this._fighter.attack(char);
                char.attack(this._fighter);
                if (this._fighter.lifePoints === -1 || char.lifePoints === -1) {
                    break;
                }
            }
        });
        return super.fight();
    }
}
exports.default = PVE;
