"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoinst = 74;
        Orc.orcInstace += 1;
    }
    get maxLifePoints() {
        return this._maxLifePoinst;
    }
    static createdRacesInstances() {
        return this.orcInstace;
    }
}
exports.default = Orc;
Orc.orcInstace = 0;
