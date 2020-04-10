var pais = "russia";

var lancarMissilNuclear = (pais) => {
  console.log("Lançando míssil em 3, 2, 1");
};

if (pais === "russia") {
  lancarMissilNuclear = () => {
    console.log("Usar o telefone vermelho");
  };
}

lancarMissilNuclear();

// EMPILHAMENTO / PILHA DE CAMADAS
// function galinha() {
//   return ovo();
// }

// function ovo() {
//   return galinha();
// }

// console.log(galinha() + "veio primeiro");

//
//
//
var ola = (quem) => {
  if (quem === undefined) {
    console.log("Olá");
  } else {
    console.log(`Olá, tudo bem ${quem} ?`);
  }
};
ola();
ola("Yago");

//
//
//
function potencia(base, expoente) {
  if (expoente === undefined) {
    expoente = 2; // setando um expoente padrão
  }

  var resultado = 1; // setando um valor inicial para o resultado

  for (var cont = 0; cont < expoente; cont++) {
    resultado *= base;
  }

  return resultado;
}
console.log(potencia(2)); // como ñ estamos passando o expoente, ele assumirá o valor setado por padrão (2);
console.log(potencia(2, 3));

//
//
//
// FUNCAO RECURSIVA
function potenciaRefatorada(base, expoente) {
  console.log(`Valor da base: ${base}. Valor do expoente: ${expoente}.`);

  if (expoente === 0) {
    return 1;
  }

  return base * potenciaRefatorada(base, expoente - 1);
}
console.log(potenciaRefatorada(2, 3));
