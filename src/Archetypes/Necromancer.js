"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._necromancerEnergy = 'mana';
        Necromancer.necromancerInstance += 1;
    }
    get energyType() {
        return this._necromancerEnergy;
    }
    static createdArchetypeInstances() {
        return this.necromancerInstance;
    }
}
exports.default = Necromancer;
Necromancer.necromancerInstance = 0;
