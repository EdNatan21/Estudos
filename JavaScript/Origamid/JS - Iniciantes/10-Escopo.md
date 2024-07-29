* Escopo de função
  - Variáveis declaradas dentro de funções não são acessadas fora da mesma.
    <!--
    function mostrarCarro() {
      var carro = 'Fusca';
      console.log(carro);
    }
    mostrarCarro(); // Fusca no console
    console.log(carro); // Erro, carro is not defined 
    -->
  - Escopo evita conflito entre nomes.

* Variável Global(Erro)
  - Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo(global).
  - Isto é um erro.
    <!-- 
    function mostrarCarro() {
      carro = 'Fusca';
      console.log(carro);
    }

    mostrarCarro(); // Fusca
    console.log(carro); // Fusca 
    -->
  - 'use strict' impede isso.

* Escopo de função(PAI)
  - Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
    <!-- 
    var carro = 'fusca';

    function mostrarCarro() {
      var frase = `Meu carro é um ${carro}`;
      console.log(frase);
    }

    mostrarCarro(); // Meu carro é um fusca
    console.log(carro) // fusca 
    -->

* Escopo de Bloco
  - Variáveis com (var), vazam bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é (const) e (let), pois estas respeitam o escopo de bloco.
    <!-- 
    if (true) {
      var carro = 'Fusca';
      console.log(carro);// Fusca 
    }
    console.log(carro); // Fusca 
    -->

* Var vaza o bloco
  - Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.
    <!-- 
    if (false) {
      var carro = 'Fusca';
      console.log(carro);
    }
    console.log(carro); // undefined 
    -->

* Const e Let no lugar de Var
  - Partir de agora vamos utilizar apenas (const) e (let) para declararmos variáveis.
    <!-- 
    if (true) {
      let carro = 'Fusca';
      console.log(carro); // Fusca
    }
    console.log(carro); // Erro, carro is not defined  
    -->

* {} Cria um bloco
  - Chaves {} cria um escopo de bloco, não confundir com a criação de objeto ( = {})
    <!-- 
    {
    let carro = 'Fusca';
    console.log(carro); // Fusca
    }
    console.log(carro); // Retorna Erro 
    -->

* For loop
  - Ao utilizar (var) dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop.
    <!-- 
    for(var i = 0; i < 10; i++){
      console.log(`Número ${i}`)
    }
    
    console.log(i) // 10  -
    ->

* Const
  - Mantém o escopo do bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
    <!-- 
    const mes = 'Dezembro';
    mes = 'janeiro'; // Erro, tentou modificar o valor
    const semana; // Erro, declarou sem valor

    const data = {
      dia: 28,
      mes: 'dezembro',
      ano: 2018
    }

    data.dia = 29 // Funciona
    data = 'janeiro' // Erro 
    -->
  - Variáveis com valores constantes devem utilizar o const.

* Let
  - Mantém o escopo do bloco, impede redeclaração, mas permite modificação do valor da variável.
    <!-- 
    let ano;
    ano = 2018;
    ano++;
    console.log(ano); // 2019

    let ano = 2020 // erro, redeclarou a variável 
    -->
  - Geralmente utilizamos o (const).

* Exercícios




 



