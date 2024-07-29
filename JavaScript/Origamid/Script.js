// Por qual motivo o código abaixo retorna com erros?
{
  const cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
  // variáveis estavam declaradas dentro do escopo e console fora.
  // Mudei de var para const.
}

// Como corrigir o erro abaixo?
// Movi a variável pra fora do escopo.
const dois = 2;
function somarDois(x) {
  return console.log(x + dois);
}
function dividirDois(x) {
  return console.log( x / dois);
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
// Exclui o for que era desnecessário para o calcúlo.
let numero = 50;
const total = 10 * numero;
console.log(total);
