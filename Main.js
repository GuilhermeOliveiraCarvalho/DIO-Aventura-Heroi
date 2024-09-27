const Jogo = require('./Jogo');

class Main {
  static executar() {
    const jogo = new Jogo();
    jogo.iniciarJornada();
  }
}


Main.executar();
