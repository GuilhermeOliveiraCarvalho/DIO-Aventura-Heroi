# 🗡️ Jogo de RPG por Turnos no Terminal - Desafio GFT Start #6

## 🎯 Sobre o Projeto
Este jogo foi inicialmente desenvolvido como um desafio de projeto do bootcamp **GFT Start #6 - Lógica de Programação** da DIO, com o tema: **Escrevendo as Classes de Um Jogo**. No entanto, a ideia foi além do proposto no desafio original, e o projeto se transformou em um **Action RPG de escolhas e turnos** rodado no terminal. O objetivo foi expandir a complexidade e as mecânicas do jogo para torná-lo mais desafiador e envolvente. 🛡️

O resultado é um jogo que conta com várias funções e mecânicas de combate, diálogos, eventos especiais e sistema de itens. Ficou muito mais completo do que o simples desafio inicial!

## 🎮 Funcionalidades Implementadas
O jogo agora é composto por várias funcionalidades e mecânicas que tornam a experiência mais rica e envolvente. Aqui está um resumo de tudo o que foi feito:

### 1. 📜 **Criação do Personagem**
- O jogador é convocado pelo Jarl da cidade de Whindhelm para eliminar ameaças nas redondezas.
- No início do jogo, o jogador cria seu personagem escolhendo um nome, idade e classe.
- Cada classe possui uma descrição única e um conjunto de armas específicas para combate.

### 2. ⚔️ **Sistema de Combate por Turnos**
- O combate é baseado em turnos e envolve 3 rodadas contra diferentes tipos de inimigos.
- Durante o combate, o jogador pode escolher a arma com a qual deseja atacar. Armas diferentes têm efeitos e probabilidades diferentes no combate.
- O inimigo também possui uma Inteligência Artificial simples, atacando com base em probabilidades.
- O combate é decidido em até 3 turnos: se o jogador ou o inimigo vencer 2 turnos antes do terceiro, o combate termina.
- Quando o jogador derrota um inimigo, há uma chance de ele dropar uma nova arma.

### 3. 🏆 **Contagem de Inimigos Derrotados**
- O jogo rastreia o número de inimigos derrotados, e exibe essa informação na tela de status do jogador como: "Inimigos Derrotados: X/6".
- O jogador vence o jogo ao derrotar 6 inimigos.

### 4. 🏚️ **A Taverna**
- Após cada batalha, o jogador tem a opção de continuar a jornada ou ir para a taverna.
- Na taverna, o jogador ganha um ponto de vida, mas perde 20 de dinheiro.
- O jogador só pode escolher a taverna se tiver dinheiro suficiente (mínimo de 20). Se não tiver, o jogo informa que ele não pode ir e força a continuidade da jornada.

### 5. 🌟 **Evento Especial na Taverna**
- Um evento especial ocorre na taverna quando o jogador acumula 30 de experiência pela primeira vez.


## 🚀 Como Rodar o Jogo Localmente
Para rodar o jogo no seu computador local, siga os passos abaixo:

### 1. 🛠️ **Pré-requisitos**
- Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu computador.
- O jogo utiliza o pacote `prompt-sync` para capturar as entradas do jogador no terminal.

### 2. 🧑‍💻 **Instalando o Projeto**
1. Clone este repositório em seu computador:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```
3. Instale o pacote `prompt-sync`:
    ```bash
    npm install prompt-sync
    ```

### 3. ▶️ **Rodando o Jogo**
- Para iniciar o jogo, execute o seguinte comando no terminal:
    ```bash
    node Main.js
    ```

## 💡 Dicas e Observações
- Escolha sabiamente suas ações durante o jogo! Seus recursos, como dinheiro e vida, são limitados.
- Cada classe possui armas diferentes e cada inimigo possui características próprias, afetando os resultados dos combates.
- Use a taverna com sabedoria para se curar e aumentar suas chances de sucesso na jornada.

Esperamos que você se divirta jogando esta aventura em turnos no terminal. Boa sorte, aventureiro! ⚔️🌄

---

## 📝 Créditos
Desenvolvido como parte do desafio de projeto do bootcamp GFT Start #6 da DIO.
Sinta-se livre para fazer suas próprias modificações se você quiser baixar o projeto.
