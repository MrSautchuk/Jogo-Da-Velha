const tituloPrincipal = document.getElementById('titulo');
const temporizador = document.getElementById('timer');
// const btnO = document.getElementById('O');
// const btnX = document.getElementById('X');
const iniciar = document.getElementById('btn');
const scoreO = document.getElementById('scoreO');
const scoreX = document.getElementById('scoreX');
const theChosen = document.getElementById('escolhido');
const blocos = document.querySelectorAll('.celula');
let vencedorX = [];
let vencedorO = [];
let vencedor = [];
let jogoAtivo = false;
let segundos = 10;
let turno = 'O';
let cronometro;
let vitoriasO = 0;
let vitoriasX = 0;
let empates = 0;

function iniciarCronometro() {
    clearInterval(cronometro);
    
    segundos = 10;
    temporizador.innerText = segundos;

    cronometro = setInterval(function() {
        segundos--;
        temporizador.innerText = segundos;

        if (segundos <= 0) {
            clearInterval(cronometro);
            jogoAtivo = false;
            alert("Tempo esgotado!");
        }
    }, 1000);
}

iniciar.onclick = function() {
  jogoAtivo = true;
  theChosen.innerText = turno
  tituloPrincipal.innerText = 'É a vez do '

  iniciarCronometro()

  // let cronometro = setInterval (function () {
  //   segundos--; 
  //   temporizador.innerText = segundos

  //   if (segundos <= 0) {
  //     clearInterval(cronometro);

  //     jogoAtivo = false;
  //     alert('Tempo Esgotado');
  //   }

  // }, 1000)
};

// btnO.onclick = function() {
//   if (jogoAtivo === true) {
//     theChosen.innerText = 'O'
//   }
// };

// btnX.onclick = function() {
//   if (jogoAtivo === true) {
//     theChosen.innerText = 'X'
//   }
// };

blocos.forEach( function(celulaIndividual) {

  celulaIndividual.onclick = function() {
    if (jogoAtivo && celulaIndividual.innerText === "") {
      celulaIndividual.innerText = turno;

      iniciarCronometro()

      if (turno === 'O') {
        turno = 'X';
      } else {
        turno = 'O';
      }

      theChosen.innerText = turno;
      checarVencedor();
      console.log(celulaIndividual);
    }
  };
});

vencedor.forEach( function() {
  if (celulaIndividual === X) {
    vencedorX = [celulaIndividual.index]
  } else if (celulaIndividual === O) {
    vencedorO = [celulaIndividual.index]
  }
});

function checarVencedor() {
  const casas = document.querySelectorAll('.celula');
  const combinacoes = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
    [0, 4, 8], [2, 4, 6]             // Diagonais
  ];

  for (let combo of combinacoes) {
    const [a, b, c] = combo;
    // Checa se a primeira casa não está vazia e se as três são iguais
    if (casas[a].innerText && 
        casas[a].innerText === casas[b].innerText && 
        casas[a].innerText === casas[c].innerText) {

        casas[a].classList.add('vencedora');
        casas[b].classList.add('vencedora');
        casas[c].classList.add('vencedora');
      
      alert("O vencedor é o " + casas[a].innerText);
      jogoAtivo = false;
      clearInterval(cronometro);
      return; 
    }

    const todasAsCelulas = document.querySelectorAll('.celula');
    const preenchidas = Array.from(todasAsCelulas).filter(c => c.innerText !== "");

    if (preenchidas.length === 9 && jogoAtivo) {
      empates++; // Incrementa a variável que você criou
      document.getElementById('velha').innerText = empates;
      alert("Deu Velha!");
      jogoAtivo = false;
      clearInterval(cronometro);
    }
  }
}

function atualizarPlacar() {
    scoreO.innerText = vitoriasO;
    scoreX.innerText = vitoriasX;
    document.getElementById('velha').innerText = empates;
}
