* Responsáveis por guardar dados na memória.
  - Inicia com as palavras var, let ou const:
  <!-- 
  - var nome = 'Natan';
  - let idade = 18;
  - const possuiFaculdade = true;
  -->

* Evitam repetições
  - DRY(Don´t repeat yourself)
    <!-- 
    - var preco = 20;
    - var totalComprado = 5;
    - var precoTotal = preco * totalComprado; 
    -->

* Vírgula
  - Utilizar a vírgula para criar mais de uma variável, sem repetir a palavra chave.
    <!-- 
    var nome = 'Natan',
      idade = 28,
      possuiFaculdade = true; 
    -->

* Sem valor
  - Pode declarar ela e não atribuir valor inicialmente.
    <!-- var precoAplicativo; -->
  - Retorna 
    <!-- undefined -->

* Nome
  - Os nomes podem iniciar com $, _ ou letras.
    <!-- Podem conter números mas não iniciar com eles -->
  - Case sensetive
    <!-- nome é diferente de Nome -->
  - Não utilizar palavras reservadas
    <!-- https://www.w3schools.com/js/js_reserved.asp -->
  - Camel case
    <!-- é comum normeamos assim: abrirModal -->

* Declarar
  - Erro ao tentar declarar uma variável que não foi declarada.
    <!-- console.log(nome) -->
  - Retorna
    <!--nome is not defined -->

* Hoisting
  - São movidos para cima do código, porém o valor atribuído não é movido.
    <!-- 
    var comida;
    console.log(comida);
    // Retorna undefined
    comida = 'Pizza';
    console.log(comida);
    // Retorna Pizza 
    -->

* Mudar o valor atribuído
  - É possível mudar os valores atribuídos a variáveis declaradas com (var) e (let). Porém não é possível modificar valores das declaradas com (const).
    <!-- 
    var idade = 28
    idade = 29
    console.log(idade)

    let preco = 50
    preco = 25
    console.log(preco)

    const possuiFaculdade = true
    possuiFaculdade = false
    // Retorna um erro 
    -->

* Exercício
  - Dica rápida, frases (string) devem ser colocadas entre aspas (duplas ou simples) e números não levam aspas.
    <!-- 
    // Declarar uma variável com seu nome
    let nome = 'Natan';
    console.log(nome);

    // Declarar uma variável com sua idade
    let idade = '23';
    console.log(idade);

    // Declarar uma variável com a sua comida favorita e não atribuir valor
    let comidaFavorita;
    console.log(comidaFavorita);

    // Atribuir valor a sua comida favorita
    comidaFavorita = 'Lasanha';
    console.log(comidaFavorita);

    // Declarar 5 variáveis diferentes sem valores
    let profissao, filmeFavorito, animeFavorito, anoNasc, diaNasc;
    console.log(profissao);
    -->