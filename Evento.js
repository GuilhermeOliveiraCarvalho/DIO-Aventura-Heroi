const { Arma } = require('./Arma');
const prompt = require('prompt-sync')();

class Evento {
  static acontecer(heroi) {
    console.log('Você dormiu na taverna, mas ouve um barulho no meio da noite, alguém está te chamando lá fora.');
    prompt('Pressione Enter para continuar...');
    
    console.log(`Voz: ${heroi.nome}, venha aqui para conversarmos.`);
    prompt('Pressione Enter para continuar...');
    
    console.log('Você vai lá fora, um homem misterioso todo de preto diz:');
    console.log('Homem Misterioso: Cuidado nessa jornada, você ainda não está no nível para lidar com essas ameaças. Aqui, tome este item.');
    
    
    const armaEspecial = new Arma('Espada Sombria', 'Uma espada imbuída de poderes das trevas.', 0.4);
    heroi.inventario.push(armaEspecial);
    console.log(`Você recebeu: ${armaEspecial.nome}!`);
    
    console.log('Homem Misterioso: Eu costumava ser um aventureiro como você, mas então eu tomei uma flechada no joelho... até mais.');
    prompt('Pressione Enter para continuar...');
    
    console.log('Você voltou a dormir e sua jornada continuou...');
    
    
    heroi.eventoEspecialAconteceu = true;
  }
}

module.exports = Evento;
