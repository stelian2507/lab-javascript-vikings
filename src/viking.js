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

}
