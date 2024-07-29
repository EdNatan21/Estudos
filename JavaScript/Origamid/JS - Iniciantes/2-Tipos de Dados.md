* 7 Tipos de dados
  - Todos são primitivos exceto os objetos.
    <!-- (Primitivos são dados imutáveis)  -->
    <!-- 
    var nome = 'Natan'; // String
    var idade = 23; // Number
    var possuiFaculdade = true // Boolean
    var time; // Undefined
    var comida = null // Null
    var simbolo = Symbol() // Symbol
    var novoObjeto = {} // Objeto
    -->

* Verificar tipo de Dado
  - typeof
  <!-- 
  var nome = 'Natan';
  console.log(typeof nome);
  -->
  - Retorna
  <!-- string -->
  - Se a variável for (null) ela retorna (objeto);

* String
  - Você pode somar string e assim concatenar as palavras.
    <!-- 
    var nome = 'Natan'
    var sobrenome = 'Silva'
    var nomeCompleto = nome + ' ' + sobrenome
    console.log(nomeCompleto) 
    -->

  - Você pode somar números com string, o resultado final é sempre uma string.
    <!-- 
    var gols = 200
    var frase = `Natan fez ${gols} gols`
    console.log(typeof frase) 
    -->
    - Retorna
    <!-- string -->

  - Apas Duplas, Simples e Template String.
    - 'JavaScript', "JavaScript" e `JavaScript`;
    <!-- Não necessariamente precisamos atribuir valores a uma váriavel -->

  - Template String
    <!-- 
    var gols = 1000;
    var frase1 = `Romário fez ${gols} gols`;
    console.log(frase1) 
    -->
    - Você deve passar expressões / variáveis dentro do ${}.

* Exercício
  - Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.
    <!-- 
    // Declare uma variável contendo uma string
    var esporte = 'Futebol';
    console.log(esporte);

    // Declare uma variável contendo um número dentro de uma string
    var ano = '2000';
    console.log(ano);

    // Declare uma variável com sua idade
    let idade = 23;
    console.log(idade);

    // Declare duas variáveis, uma com seu nome, outra com o sobrenome e some as duas
    let nome = 'Natan',
      sobrenome = 'Silva';
    let nomeCompleto = `${nome} ${sobrenome}`;
    console.log(nomeCompleto);

    // Coloque a seguinte frase em uma variável: it's time
    let tempo = "it's time";
    console.log(tempo);

    // Verifique o tipo de variável que contém seu nome
    verificarNome = typeof nome
    console.log(verificarNome);
    -->
