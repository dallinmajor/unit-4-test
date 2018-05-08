var currentHero = "";
var currentVillian = "";


class character {
    constructor(health,attackPow,counterPow ){
        this.health = health;
        this.attackPow = attackPow;
        this.counterPow = counterPow;
    }
    attack() {
        currentVillian.health -= attackPow;
        this.health -= currentVillian.counterPow;
        this.attackPow += this.attackPow;
    }
};

const maceWindu = new character(100,7,12);
const obiWan = new character(150,6,10);
const keyloRen = new character(100,8,12);
const darthVader = new character(120,5,15);



