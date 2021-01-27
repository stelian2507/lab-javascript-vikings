// Soldier
class Soldier {
    constructor(health, strength) {
  this.health = health;
  this.strength = strength;
    }
   attack() {
return this.strength;

   }
   receiveDamage(damage) {
       this.health -= damage;
   }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
    
        this.name = name;
        }
        attack() {
            return this.strength;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
              let msg 
              if (this.health > 0) {
                  msg = (`${this.name} has receveived ${damage} points of damage`);
              } else {
                  msg = (`${this.name} has died in the act of combat`);
        
              }
        return msg;
}
battleCry() {
    return "Odin Owns You All!";
}
}

// Saxon
class Saxon  extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
              let msg;
              if (this.health > 0) {
                  msg = `A Saxon has receveived ${damage} points of damage`;
              } else {
                  msg = `A Saxon has died in the act of combat`;
        
              }
        return msg;
} 
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
  
    addViking(sword) {
      this.vikingArmy.push(sword);
    }
    addSaxon(arrow) {
      this.saxonArmy.push(arrow);
    }
    vikingAttack() {
      let luckySoldier = getRandomInt(this.vikingArmy.length);
      let unluckySoldier = getRandomInt(this.saxonArmy.length);
      this.saxonArmy[unluckySoldier].receiveDamage(
        this.vikingArmy[luckySoldier].strength
      );
  
      if (this.saxonArmy[unluckySoldier].health <= 0) {
        this.saxonArmy.splice(unluckySoldier, 1);
        return "A Saxon has died in combat";
      } else {
        return `A Saxon has received ${this.vikingArmy[luckySoldier].strength} of damage!`;
      }
    }
  
    saxonAttack() {
      let luckySoldier = getRandomInt(this.saxonArmy.length);
      let unluckySoldier = getRandomInt(this.vikingArmy.length);
      this.vikingArmy[unluckySoldier].receiveDamage(
        this.saxonArmy[luckySoldier]?.strength
      );
  
      if (this.vikingArmy[unluckySoldier].health <= 0) {
        this.vikingArmy.splice(unluckySoldier, 1);
        return "A Viking has fallen";
      } else {
        return `${this.vikingArmy[unluckySoldier].name} has received ${this.saxonArmy[luckySoldier].strength} points of damage`;
      }
    }
    showStatus() {
      if (this.saxonArmy.length == 0) {
        return "Vikings have won the war of the century!";
      } else if (this.vikingArmy.length == 0) {
        return "Saxons have fought for their lives and survived another day...";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    }
  }
  
  let viking = new Viking("Ragnar", 300, 300);
  let saxon = new Saxon(200, 250);
  
  let newWar = new War();
  
  newWar.addSaxon(saxon);
  newWar.addViking(viking);
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  const maxViking = 12;
  const maxSaxon = 12;
  
  for (let i = 0; i < maxViking; i++) {
    const viking = new Viking(
      "Bob",
      100 + getRandomInt(200),
      20 + getRandomInt(75)
    );
    newWar.addViking(viking);
  }
  
  for (let i = 0; i < maxSaxon; i++) {
    const saxon = new Saxon(100 + getRandomInt(200), 20 + getRandomInt(75));
    newWar.addSaxon(saxon);
  }
  
  let turn = 0;
  function tick() {
    if (turn++ % 2 == 0) {
      console.log(newWar.vikingAttack());
    } else {
      console.log(newWar.saxonAttack());
    }
  
    if (turn % 10 == 0) {
      console.log(newWar.showStatus());
    }
  
    if (newWar.saxonArmy.length == 0 || newWar.vikingArmy.length == 0) {
      clearInterval(int);
      console.log(newWar.showStatus());
      console.log("War is over");
    }
  }
  
  let int = setInterval(tick, 75);
