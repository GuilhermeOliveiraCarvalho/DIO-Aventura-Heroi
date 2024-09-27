const inimigos = require('./Inimigo');

class Combate {
  constructor(heroi) {
    this.heroi = heroi;
  }

  iniciarCombate() {
    
    const inimigo = inimigos[Math.floor(Math.random() * inimigos.length)];
    console.log(`Apareceu um ${inimigo.tipo} em sua jornada!`);

    
    return this.heroi.atacar(inimigo);
  }
}

module.exports = Combate;
