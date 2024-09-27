class Inimigo {
    constructor(tipo, probabilidadeAtaque, recompensa, perdaDinheiro, recompensaItens = []) {
      this.tipo = tipo;
      this.probabilidadeAtaque = probabilidadeAtaque;
      this.recompensa = recompensa;
      this.perdaDinheiro = perdaDinheiro;
      this.recompensaItens = recompensaItens; 
    }
  }
  
  
  const inimigos = [
    new Inimigo('Monstro', 0.4, 20, 10, [{ nome: 'Espada de Bronze', bonus: 0.1 }]),
    new Inimigo('Assassino', 0.5, 30, 20, [{ nome: 'Adaga Envenenada', bonus: 0.2 }, { nome: 'Capa de Invisibilidade', bonus: 0.15 }]),
    new Inimigo('Ladrão', 0.45, 25, 15, [{ nome: 'Adaga Curta', bonus: 0.1 }]),
    new Inimigo('Troll', 0.35, 40, 20, [{ nome: 'Machado de Pedra', bonus: 0.2 }]),
    new Inimigo('Golem', 0.3, 50, 30, [{ nome: 'Espada de Pedra', bonus: 0.3 }, { nome: 'Martelo do Golem', bonus: 0.25 }]),
    new Inimigo('Duende', 0.5, 15, 5, [{ nome: 'Espada Pequena', bonus: 0.1 }])
  ];
  
  module.exports = inimigos;
  