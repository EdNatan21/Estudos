* Boolean
  - Existem dois fatores boolean (false) ou (true).

* Condicionais If e Else
  - Verificar se uma expressão é verdadeira com (if), caso contrário o (else) será ativado.
    - O valor dentro do parênteses sempre será avaliado em false ou true.
    <!-- 
    var possuiGraduacao = false

    if (possuiGraduacao) {
      console.log('Possui Graduação')
    } else {
      console.log('Não Possui Graduação ')
    } 
    Retorna: Possui Graduação.
    -->
  - Se o if não for verdadeiro, ele testa o else if.
    <!-- 
    var possuiGraduacao = true
    var possuiDoutorado = false

    if (possuiDoutorado) {
      console.log('Possui Doutorado')
    } else if (possuiGraduacao) {
      console.log('Possui Graduação, mas não possui Doutorado')
    } else {
      console.log('Não possui graduação')
    } 
    Retorna: Possui Graduação, mas não possui Doutorado.
    -->

* Truthy e Falsy
  - Existe valores que retorna (true) e outros retornam (false) quando verificados em uma expressão booleana.
    <!-- 
    Falsy:
    if(false)
    if(0) / (-0)
    if(NaN)
    if(null)
    if(undefined)
    if('') // (``) // ("")  
    -->
    - O resto é truthy.

* Operador lógico de navegação
  - O operador (!), nega uma operação booleana. Ou seja, (!true) é igual false.
    <!-- 
    var um = 1
    if (!um) {
      console.log('Um')
    } else {
      console.log('Dois')
    } 
    Retorna: Dois.
    -->
  - Você pode utilizar (!!) para verificar se uma expressão é truthy ou false.
    <!-- 
    var um = 5;
    if (um) {
      console.log(!!um);
    } else {
      console.log(!!um);
    } 
    -->

* Operadores de comparação
  - Vão sempre retornar um valor booleano
    <!-- 
    10 > 5 // true
    5 > 10 // false
    20 < 10 // false
    10 <= 10 // true
    10 >= 11 // false 
    -->
  - O (==) faz uma comparação não ta estrita e o (===) faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usarmos (===).
    <!-- 
    10 == '10' // true
    10 == 10 // true
    10 === '10' // false
    10 === 10 // true
    10 != 15 // true
    10 != '10' // false
    10 !== '10' // true
    -->

* Operadores Lógicos &&
  - (&&) compara se uma expressão e a outra é verdadeira.
    <!-- 
    true && true // true
    true && false // false
    false && false // false
    'Gato' && 'Cão' // 'Cão'
    (5 - 5) && (5 + 5) // 0
    'Gato' && false // false
    (5 >= 5 ) && (3 < 6) // true 
    -->
    - Se ambos os valores forem true ele irá retornar o último valor verificado. Se algum valor for false ele irá retornar o mesmo não irá continuar a verificar os próximos.

* Operadores Lógicos ||
  - (||) compara se uma expressão ou outra é verdadeira.
    <!-- 
    true || true // true
    true || false // true
    false || true // true
    'Gato' || 'Cão' // 'Gato'
    (5 - 5) || (5 + 5) // 10
    'Gato' || false // true
    (5 => 5) || (3 < 6) // true 
    -->
    - Retorna o primeiro valor true que encontrar.

* Switch
  - Com o (switch) você pode verificar se uma variável é igual a diferentes valores utilizando o (case). Caso ela seja igual, você fazer alguma coisa e utilizar a palavra (break;) para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
    <!-- 
    var natan = 5;

    switch (natan) {
      case 0:
        console.log('0');
        break;
      case 1:
        console.log('1');
        break;
      case 2:
        console.log('2');
        break
      default:
        console.log('Outro') 
    } 
    -->

* Exercício
  <!-- 
  // Verifique se a sua idade é maior de que a de algum parente
  // Dependendo do reesultado coloque no console quem é maior
  let Natan = 23;
  let Douglas = 33;

  if (Douglas > Natan) {
    console.log('Douglas é mais velho');
  } else if (Natan > Douglas) {
    console.log('Natan é mais velho');
  } else {
    console.log('Possuem a mesma idade');
  }

  // Qual valor é retornado na seguinte expressão
  var expressao = 5 - 2 && 5 - ' ' && 5 - 2;
  Retorna 3

  // Verifique se as seguintes variáveis são truthy ou falsy
  var nome = 'Natan'; // True
  var idade = 28; // True
  var possuiFaculdade = false; // False
  var empregoFuturo; // False
  var dinheiroNaConta = 0; // False

  console.log(
    !!nome,
    !!idade,
    !!possuiFaculdade,
    !!empregoFuturo,
    !!dinheiroNaConta,
  );

  // Compare o total de habitantes do Brasil com China (Valor em milhôes)
  var brasil = 207e5;
  var china = 1340e5;

  if(brasil > china) {
    console.log(`Brasil maior que china, Brasil: ${brasil}`)
  } else {
    console.log(`China maior que Brasil, China: ${china}`)
  }

  // O que irá aparecer no console
  if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro')
  } else {
    console.log('Falso')
  }
  Retorna: Falso

  // O que irá aparecer no console
  if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão')
  } else {
    console.log('Falso')
  } 
  Retorna: 'Cão' 
  -->
