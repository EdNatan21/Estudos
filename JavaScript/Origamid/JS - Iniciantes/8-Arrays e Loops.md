* Array
  - É um grupo de valores geralmente relacionados. Servem para guardamos diferentes valores em uma única variável.
    <!-- 
    var videoGames = ['Switch', 'Ps4', 'Xbox'];
    console.log(videoGames[0]); // Switch
    console.log(videoGames[2]); // Xbox 
    -->
  - Acesse o elemento do array utilizando [].

* Métodos e Propriedades de uma array
  <!-- 
  var videoGames = ['Switch', 'Ps4', 'Xbox'];
  videoGames.pop(); // Remove o ultimo item e retorna ele
  videoGames.push('3DS'); // Adiciona ao final do array
  videoGames.length; // 3

  console.log(videoGames); 
  -->
  - Existem diversos outros métodos, como (map), (reduce), (forEach) e outros.

* For Loop
  - Fazem algo repetidamente até que uma condição seja atingida.
    <!-- 
    for (var numero = 0; numero <= 10; numero++) {
      console.log(numero);
    }
    // Retorna: de 0 à 10 
    -->
  - O for loop possui 3 partes, (ínicio), (condição), (incremento)

* While loop
  <!-- 
  var i = 0
  while ( i < 10) {
    console.log(i)
    i++
  }
  // Retorna 0 à 10 
  -->
  - o for loop é o mais comum.

* Arrays e Loops
  <!-- 
  var videoGames = ['Switch', 'PS4', 'XBOX'];
  for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
  } 
  -->

* Break
  - O loop irá parar caso encontre a palavra (break).
  <!-- 
  var videoGames = ['Switch', 'PS4', 'XBOX'];
  for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if (videoGames[i] === 'PS4') {
      break;
    }
  } 
  -->

* ForEach
  - forEach é um metodo que executa uma função para cada item do Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like).
  <!-- 
  var videoGames = ['Switch', 'PS4', 'XBOX'];
  videoGames.forEach(function (item) {
    console.log(item);
  });
  // O argumento (item) será atribuído dinamicamente 
  -->
  - Podemos passar os seguintes parâmetros (item), (index) e (array)

* Não se confunda com a sintaxe
  <!-- 
  var numero = 0;
  var maximo = 50;
  for(;numero < maximo;) {
    console.log(numero)
    numero++
  }
  - Não aconselhado fazer desse jeito, mas funciona. 
  -->

* Exercício
  <!-- 
  // Crie uma array com os anos que o Brasil ganhou a copa
  // 1959, 1962, 1970, 1994, 2002
  let Brasil = ['1959', '1962', '1970', '1994', '2002'];

  // Interaja com a array utilizando um loop, para mostrar
  // no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
  Brasil.forEach(function (item) {
    console.log(`O Brasil ganhou a copa de ano ${item}`);
  });

  // Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
  var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
  for (var fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta]);
    if (frutas[fruta] === 'Pera') {
      break;
    }
  }

  // Coloque a última fruta da array acima em uma variável,
  // sem remover a mesma da array.
  let f = frutas[frutas.length - 1];
  console.log(frutas);
  console.log(f); 
  -->

  




