const rankingDate = [
  { nome: "Ferro", min: 1, max: 10 },
  { nome: "Bronze", min: 11, max: 20 },
  { nome: "Prata", min: 21, max: 50 },
  { nome: "Ouro", min: 51, max: 80 },
  { nome: "Platina", min: 81, max: 90 },
  { nome: "Ascendente", min: 91, max: 100 },
  { nome: "Imortal", min: 101, max: 999 },
];

let wins = 50;
let loses = 0;
let player = "Rafael";

//variável que recebeu o resultado da função
let sum = calcResult(wins, loses);

function calcResult(wins, loses) {
  let resultSum = wins - loses;
  return resultSum;
}

//.map() para passar por cada elemento do array e verificar qual é compatível
const winsRanking = rankingDate.map((item) => {
  if (sum >= item.min && sum <= item.max) {
    console.log(`Parabéns ${player} você alcançou o ranking ${item.nome}!`);
  }
});

//uma variação caso o resultado for 0
if (sum <= 0) {
  console.log(
    `${player} o seu saldo de vitórias:"${sum}" ainda não é o suficiente, continue jogando para adquirir Ranking!`
  );
}

//Versão alternativa Com switchCase substituindo .map()

switch (true) {
  case sum <= 10:
    elo = "Ferro";
    break;

  case sum >= 11 && sum <= 20:
    elo = "Bronze";
    break;

  case sum >= 21 && sum <= 50:
    elo = "Prata";
    break;

  case sum >= 51 && sum <= 80:
    elo = "Ouro";
    break;

  case sum >= 81 && sum <= 90:
    elo = "Platina";
    break;

  case sum >= 91 && sum <= 100:
    elo = "Ascendente";
    break;

  case sum >= 10000:
    elo = "Radiante";
    break;
}
