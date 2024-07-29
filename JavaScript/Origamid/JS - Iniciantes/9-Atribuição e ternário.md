* Comentários
  - Servem para explicar o código.
  - Comentar uma linha de código desativa a mesma. Não deixe uma linha de código comentada no arquivo final.

* Operadores de Atribuição
  - Podem funcionar como formas abreviadas.
    <!-- 
    var x = 5;
    var y = 10;
    x += y // x = x + y (15)
    x -= y // x = x - y (-5)
    x *= y // x = x * y (50)
    x /= y // x = x / y (0.5)
    x %= y // x = x % y (0)
    x **= y // x = x ** y (9765625) 
    -->

* Operador Ternário 
  - Abreviações de condicionais com if e else.
    <!-- 
    var idade = 19;
    var podeBeber = idade > 17 ? 'Pode beber' : 'Não pode beber';
    console.log(podeBeber); 
    // Condição (?) true (:) false
    -->
  - Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição.

* If abreviado
  - Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código.
    <!-- 
    var possuiFaculdade = true;
    if (possuiFaculdade) console.log('Possui faculdade');
    else console.log('Não possui faculdade');

    // ou
    if(possuiFaculdade)
      console.log('Possui faculdade')
    else
      console.log('Não possui faculdade') 
    -->

* Exercício
  <!-- 
  // Some 500 ao valor de scroll abaixo,
  // atribuindo o novo valor a scroll
  var scroll = 1000;
  scroll += 500;
  console.log(scroll); // Retorna: 1500

  // Atribua true para a variável darCredito,
  // caso o cliente possua carro e casa.
  // E false caso o contrário.
  var possuiCarro = true;
  var possuiCasa = true;
  var darCredito = (possuiCarro && possuiCasa);
  console.log(darCredito); // Retorna: true
  -->






