# TikTakToe 🕹️

Projeto desenvolvido como parte dos meus estudos de programação**. O foco principal foi consolidar conceitos de lógica e manipulação do DOM durante minha transição de carreira para a área de tecnologia.

## 🚀 Funcionalidades

* **Cronômetro Dinâmico**: Cada jogador possui 10 segundos para realizar sua jogada; o tempo reseta automaticamente após cada clique.
* **Sistema de Turnos**: Alternância inteligente entre jogadores com trava de segurança para células já preenchidas.
* **Verificação de Vitória**: Algoritmo que identifica as 8 combinações possíveis de vitória e destaca visualmente a trilha vencedora.
* **Placar de Classificação**: Container dedicado para contagem de vitórias de 'X', 'O' e empates (Velha).

## 🛠️ Tecnologias Utilizadas

* **HTML5**: Estrutura semântica para os containers de jogo, controle e placar.
* **CSS3**: Layout moderno com Flexbox, estilização de botões e efeitos de hover.
* **JavaScript (ES6+)**:
    * `setInterval` e `clearInterval` para controle preciso do cronômetro.
    * `querySelectorAll` e `forEach` para manipulação eficiente de múltiplos elementos do DOM.
    * Lógica de desestruturação de arrays para verificação de padrões de vitória.

## 🧠 Desafios Técnicos Superados

### 1. Gestão de Memória e Cronômetro
Um dos principais desafios foi lidar com o comportamento do `setInterval`. Inicialmente, clicar múltiplas vezes no botão "Iniciar" criava vários timers simultâneos, acelerando a contagem de forma errática. A solução foi garantir que qualquer instância anterior fosse destruída com `clearInterval` antes de iniciar um novo ciclo, mantendo o tempo sempre sincronizado.

### 2. Manipulação do DOM vs Performance
Para evitar a criação manual de 9 eventos de clique individuais, utilizei o método `forEach` em uma lista de elementos capturada via `querySelectorAll`. Isso permitiu que a lógica de jogada fosse centralizada em uma única função, facilitando a manutenção e futuras expansões do tabuleiro.

### 3. Algoritmo de Verificação de Padrões
Em vez de usar múltiplas condicionais aninhadas (`if/else` gigantes), implementamos um loop que percorre uma matriz de combinações vitoriosas. Isso tornou a verificação de vitória muito mais performática e o código mais legível (Clean Code).

## 📂 Como Executar o Projeto

1. Clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Clique em **"Iniciar Jogo"** para ativar o cronômetro e liberar o tabuleiro.

---
Em Desenvolvimento.
