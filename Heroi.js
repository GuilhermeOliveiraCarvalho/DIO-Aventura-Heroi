const { armas } = require('./Arma');
const prompt = require('prompt-sync')(); 

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.vida = 5;
    this.exp = 0;
    this.dinheiro = 50;
    this.inventario = armas[tipo]; 
    this.itemAtual = this.inventario[0]; 
    this.inimigosDerrotados = 0; 
    this.eventoEspecialAconteceu = false; 


  }

  descreverClasse() {
    const descricoes = {
      guerreiro: 'Guerreiro: Especialistas em combate corpo a corpo, usam espadas para lutar.',
      mago: 'Mago: Mestres dos elementos, capazes de manipular qualquer elemento.',
      monge: 'Monge: Utilizam artes marciais e habilidades meditativas para combater.',
      ninja: 'Ninja: Rápidos e furtivos, usam técnicas silenciosas e armas letais.'
    };
    console.log(descricoes[this.tipo]);
    prompt('Pressione Enter para continuar...'); 
  }

  selecionarArma() {
    console.log('Escolha sua arma para o ataque:');
    this.inventario.forEach((arma, index) => {
      console.log(`${index + 1}: ${arma.nome} - ${arma.descricao}`);
    });
    let escolha;
    do {
      escolha = parseInt(prompt('Digite o número da arma que deseja usar: '));
    } while (isNaN(escolha) || escolha < 1 || escolha > this.inventario.length);

    this.itemAtual = this.inventario[escolha - 1];
    console.log(`Você selecionou: ${this.itemAtual.nome}`);
    prompt('Pressione Enter para continuar...');
  }

  atacar(inimigo) {
    console.log(`Você decidiu lutar! O ${inimigo.tipo} te atacou primeiro.`);
    prompt('Pressione Enter para iniciar os turnos...');
    let sucesso = 0;
    let inimigoSucesso = 0;

    for (let turno = 1; turno <= 3; turno++) {
      console.log(`Turno ${turno}:`);
      
      
      if (Math.random() < inimigo.probabilidadeAtaque) {
        console.log(`O ${inimigo.tipo} te acertou!`);
        inimigoSucesso++;
      } else {
        console.log(`O ${inimigo.tipo} errou o ataque!`);
      }

      
      this.selecionarArma();
      const probabilidadeVitoria = 0.5 + this.itemAtual.bonus;

      
      if (Math.random() < probabilidadeVitoria) {
        console.log(`Você atacou o ${inimigo.tipo} com ${this.itemAtual.nome} e acertou!`);
        sucesso++;
      } else {
        console.log(`Você errou o ataque!`);
      }

     
      if (sucesso >= 2) {
        console.log(`Você derrotou o ${inimigo.tipo}!`);
        this.vencer(inimigo);
        return true;
      } else if (inimigoSucesso >= 2) {
        console.log(`Você foi derrotado pelo ${inimigo.tipo}!`);
        this.perder(inimigo);
        return false;
      }
      prompt('Pressione Enter para continuar para o próximo turno...');
    }

    
    if (sucesso > inimigoSucesso) {
      console.log(`Você derrotou o ${inimigo.tipo}!`);
      this.vencer(inimigo);
      return true;
    } else {
      console.log(`Você foi derrotado pelo ${inimigo.tipo}!`);
      this.perder(inimigo);
      return false;
    }
  }

  vencer(inimigo) {
    this.exp += 10;
    this.dinheiro += inimigo.recompensa;

    
    

    
    if (Math.random() < 0.5 && inimigo.recompensaItens.length > 0) {
        const itemGanhos = inimigo.recompensaItens[Math.floor(Math.random() * inimigo.recompensaItens.length)];
        
        
        const itemJaExiste = this.inventario.some(arma => arma.nome === itemGanhos.nome);
        if (!itemJaExiste) {
            this.inventario.push(itemGanhos);
            console.log(`Você ganhou um item: ${itemGanhos.nome}!`);
        } else {
            console.log(`O ${inimigo.tipo} iria dropar ${itemGanhos.nome}, mas você já possui este item.`);
        }
    }

    if (this.tipo === 'mago') {
        this.vida += 1; 
        console.log('Sua vida aumentou devido ao seu poder elemental!');
    }
}


  perder(inimigo) {
    this.vida -= 1;

    
    if (Math.random() < 0.3) {
      this.dinheiro -= inimigo.perdaDinheiro;
      console.log(`Você perdeu ${inimigo.perdaDinheiro} de dinheiro!`);
    }

    if (Math.random() < 0.1 && this.itemAtual) {
      console.log('Você perdeu sua arma !');
      this.itemAtual = null; 
    }

    if (!this.itemAtual) {
      console.log('Você está sem arma! A probabilidade de sucesso no próximo ataque diminui!');
    }
  }

  mostrarStatus() {
    console.log(`
    Nome: ${this.nome}
    Idade: ${this.idade}
    Classe: ${this.tipo}
    Vida: ${this.vida}
    Experiência: ${this.exp}
    Dinheiro: ${this.dinheiro}
    Inimigos Derrotados: ${this.inimigosDerrotados}/6
    Item Atual: ${this.itemAtual ? this.itemAtual.nome : 'Nenhuma'}
    Inventário: ${this.inventario.map(arma => arma.nome).join(', ')}
    `);
    prompt('Pressione Enter para continuar...');
  }

}

module.exports = Heroi;
