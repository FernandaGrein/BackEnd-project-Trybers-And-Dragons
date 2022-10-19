"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._rangerEnergy = 'stamina';
        Ranger.rangerInstance += 1;
    }
    get energyType() {
        return this._rangerEnergy;
    }
    static createdArchetypeInstances() {
        return this.rangerInstance;
    }
}
exports.default = Ranger;
Ranger.rangerInstance = 0;
