const Heroi = require('./Heroi');
const Combate = require('./Combate');
const prompt = require('prompt-sync')();

class Jogo {
  constructor() {
    this.heroi = null;
    this.vitoriasNecessarias = 6;
    this.vitorias = 0;
  }

  iniciarJornada() {
    console.log('Você foi convocado pelo Jarl de Whindhelm para solucionar problemas com certas ameaças nas redondezas da província. Digite suas informações:');

    const nome = prompt('Digite o nome do herói: ');
    const idade = parseInt(prompt('Digite a idade do herói: '));
    let tipo;
    const tiposValidos = ['guerreiro', 'mago', 'monge', 'ninja'];

    do {
      tipo = prompt('Digite o tipo do herói (guerreiro, mago, monge, ninja): ').toLowerCase();
      if (!tiposValidos.includes(tipo)) {
        console.log('Classe inválida do herói. Digite apenas uma dessas: guerreiro, mago, monge, ninja.');
      }
    } while (!tiposValidos.includes(tipo));
    
    this.heroi = new Heroi(nome, idade, tipo);
    this.heroi.descreverClasse();
    
    
    console.log(`Jarl: Olá ${nome}, vejo que você é um ${tipo}.`);
    if (tipo === 'guerreiro') {
      console.log('Jarl: Então você tem a força e coragem necessárias para o combate direto, isso será bom para nós.');
    } else if (tipo === 'mago') {
      console.log('Jarl: Suas habilidades com elementos serão essenciais para lidar com certos inimigos.');
    } else if (tipo === 'monge') {
      console.log('Jarl: Seu treinamento nas artes marciais lhe dará bastante vantagem na batalha.');
    } else if (tipo === 'ninja') {
      console.log('Jarl: Sua furtividade e precisão são exatamente o que precisamos para esta missão.');
    }
    
    console.log('Jarl: Elimine 6 ameaças e volte para mim. Você terá uma grande recompensa.');
    prompt('Pressione Enter para começar sua jornada...');
    this.jornada();
  }

  jornada() {
    while (this.heroi.vida > 0 && this.vitorias < this.vitoriasNecessarias) {
        this.heroi.mostrarStatus();
        console.log("Apareceu um inimigo na sua jornada! O que você quer fazer?");
        
        let escolha;
        do {
            escolha = prompt('Digite 1 para atacar ou 2 para correr para a mamãe: ');
            if (escolha !== '1' && escolha !== '2') {
                console.log('Digite apenas 1 ou 2.');
            }
        } while (escolha !== '1' && escolha !== '2');

        if (escolha === '2') {
            console.log('Isso fuja mesmo, essa jornada não foi feita para um bebê como você, vá tomar seu leitinho vai!');
            console.log('GAME OVER');
            return;
        }

        
        const combate = new Combate(this.heroi);
        const sucesso = combate.iniciarCombate();
        if (sucesso) {
            this.vitorias++;
            this.heroi.inimigosDerrotados = this.vitorias;

            
            if (this.vitorias >= this.vitoriasNecessarias) {
                console.log('Parabéns, você eliminou todas as ameaças! Volte para Whindhelm e compartilhe sua vitória com o Jarl.');
                this.heroi.mostrarStatus();
                prompt('Pressione Enter para continuar...');

                
                console.log(`Jarl: Olá ${this.heroi.nome}, você retornou vitorioso como eu esperava.`);
                prompt('Pressione Enter para continuar...');
                
                console.log('Jarl: Você cumpriu sua missão com coragem e honra. As terras de Whindhelm estão seguras novamente graças a você.');
                prompt('Pressione Enter para continuar...');
                
                console.log('Jarl: Eu vi sua bravura, sua força e seu espírito inabalável. E como recompensa por seus feitos heroicos...');
                prompt('Pressione Enter para continuar...');
                
                console.log('Jarl: Eu concedo a você o título de *Thane* de Whindhelm! Uma posição de prestígio, onde todos o reconhecerão como um verdadeiro herói.');
                prompt('Pressione Enter para continuar...');
                
                console.log('Jarl: Além disso, você terá direito a um *Housecarl*, um guardião leal que o acompanhará e protegerá em suas jornadas.');
                prompt('Pressione Enter para continuar...');
                
                console.log('Jarl: E, é claro, você receberá uma casa especial na cidade de Whindhelm, um lugar que você pode chamar de seu.');
                prompt('Pressione Enter para continuar...');
                
                console.log('Jarl: Vá agora, Thane! A cidade de Whindhelm o saúda como o herói que você é.');
                prompt('Pressione Enter para continuar...');
                
                console.log('Você se tornou Thane de Whindhelm, ganhou um Housecarl e uma casa especial na cidade! Todos agora o reconhecem como um verdadeiro herói!');
                console.log('Fim de sua jornada... mas um novo capítulo começa como Thane de Whindhelm.');
                prompt('Pressione Enter para finalizar o jogo...');
                return;
            }
            
            
            let opcao;
            do {
                if (this.heroi.dinheiro < 20) {
                    console.log('Você não tem dinheiro suficiente para ir à taverna seu pão duro.');
                    opcao = '1'; 
                } else{
                opcao = prompt('Digite 1 para continuar a jornada ou 2 para parar na taverna: ');
                if (opcao !== '1' && opcao !== '2') {
                    console.log('Digite apenas 1 ou 2.');
                }
            }
            } while (opcao !== '1' && opcao !== '2');

            if (opcao === '2') {
                this.heroi.vida += 1;
                this.heroi.dinheiro -= 20;
                console.log('Você foi para a taverna, ganhou um coração de vida, mas perdeu 20 de dinheiro.');
                
               
                if (this.heroi.exp >= 30 && !this.heroi.eventoEspecialAconteceu) {
                    const Evento = require('./Evento');
                    Evento.acontecer(this.heroi);
                }
                
                prompt('Pressione Enter para continuar...');
            }
        } else if (this.heroi.vida <= 0) {
            console.log('Você perdeu todas as suas vidas! GAME OVER');
            return;
        }
    }
}

}

module.exports = Jogo;
