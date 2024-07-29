* Números
  - Colocar o valor sem aspas.
  - Ponto para decima <!-- 2.15 -->
  - Colocar o 'e' para exponencial <!-- 2e10 = 20000000000 -->
  - Precisão ate 15 digitos.

* Operadores Aritméticos
  - Soma = +
  - Divisão = /
  - Multiplicação = *
  - Subtração = -
  - Expoente = **
  - Modulo = %, representa o restante inteiro do calculo <!-- 14 % 5 = 4 -->

*  Operadores Aritméticos (Strings)
  - Soma = ele concatena os valores <!-- 10 + 5 = 105 -->
  - Subtração = ele subtrai o valor se possível, já que não é possivel subtrair uma string. 
  - Multiplicação = ele multiplica caso possível, mesma regra da subtração.
  - Divisão = mesma regras, caso tenha caracterer envolvido se torna NaN(Not a Number). <!-- 'Comprei 20' / 2 = NaN  --> 
  - É possível verificar se uma variável é NaN ou não com a função isNan().
    <!-- 
    var oi = '10 mais' / 10;
    console.log(isNaN(oi)); 
    -->

* A ordem importa
  - Começa por multiplicação e divisão, depois soma e subtração.
  - Parênteses para priorizar uma expressão. <!-- var total = (20 + 5) * 2 = 50 -->

* Operadores Aritméticos Unários 
  - adicionar '++' acrecenta 1 ao valor da variável.   
  - adicionar '--' subtrai 1 ao valor da variável.   
  <!--
  var x = 10;
  console.log(x++);
  x++ = (x = x + 1)
  console.log(x)
  Retorna: 6.
  -->
  - O (+) e (-) tenta tranformar o valor seguinte em número.
  <!-- 
  var x = '10';
  console.log(typeof(+x)); 
  Retorna: number.
  -->
  - (-) antes de um número torna ele negativo.
  <!-- 
  var x = '10';
  console.log(-x); 
  Retorna: -10.
  -->

* Exercício
  <!-- 
  // Qual o resultado da seguinte expressão?
  var total = 10 + (5 * 2) / 2 + 20;
  console.log(total);

  // Crie duas expressões que retorna NaN
  var exp1 = 'Número' / 2;
  var exp2 = 'Número' / 2;
  console.log(exp1, exp2);

  // Somar a string '200' com número 50 e retornar 250
  var S = +'200' + 50;
  console.log(S);

  // Incremente o número 5 e retorne o seu valor incrementado
  var num = 5;
  num++;
  console.log(num);

  // Como dividir o peso por 2?
  var numero = +'80' / 2;
  var unidade = 'Kg';
  var peso = numero + unidade; // '80Kg'
  console.log(peso); 
  -->
