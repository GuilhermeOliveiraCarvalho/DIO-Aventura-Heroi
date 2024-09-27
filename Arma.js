class Arma {
    constructor(nome, descricao, bonus) {
      this.nome = nome;
      this.descricao = descricao;
      this.bonus = bonus; 
    }
  }
  
  
  const armas = {
    guerreiro: [new Arma('Espada Longa', 'Uma espada longa e afiada.', 0.2), new Arma('Machado de Batalha', 'Um machado pesado e mortal.', 0.3)],
    mago: [new Arma('Cajado Elemental', 'Um cajado cheio de poderes elementais.', 0.25), new Arma('Varinha de Fogo', 'Uma varinha que lança bolas de fogo.', 0.2)],
    monge: [new Arma('Manopla do Poder', 'Luvas que amplificam o poder de seus punhos.', 0.15), new Arma('Bastão de madeira', 'Um bastão usado apenas por monges.', 0.25)],
    ninja: [new Arma('Nunchaku Rápido', 'Arma rápida e silenciosa.', 0.3), new Arma('Espada Curta', 'Uma espada leve e afiada.', 0.2)]
  };
  
  module.exports = { Arma, armas };
  
  