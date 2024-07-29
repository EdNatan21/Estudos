* Funções
  - Bloco de código que pode ser executado e reutilizado. Valores podem passar uma função e a mesma retorna outros valores.
    <!-- 
    function areaQuadrado(lado) {
      return lado * lado;
    }

    console.log(areaQuadrado(4))  // 16
    console.log(areaQuadrado(5))  // 25
    console.log(areaQuadrado(2))  // 4 
    -->
  - Chamada de function declaration.
  - Parentêses executam uma função.
    <!-- 
    function pi() {
      return 3.14
    }

    var total = 5 * pi() // 15.7
    console.log(total)
    -->

* Parâmetros e Argumentos
  - Ao criar uma função, você pode definir parâmetros.
  - Ao executar uma função, você pode passar argumentos.
    <!-- 
    // Peso e altura são parâmetros
    function imc(peso, altura) {
      const imc = peso / altura ** 2;
      return imc;
    }

    console.log(imc(65, 1.76)); //
    console.log(imc(55, 1.70)); // 
    -->
  - Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também.

* Parênteses executa a função
  <!-- 
  function corFavorita(cor) {
    if (cor === 'azul') {
      return 'Você gosta do céu';
    } else if (cor === 'verde') {
      return 'Você gosta do mato';
    } else {
      return 'Você não gosta de nada';
    }
  }
  console.log(corFavorita()) 
  -->
  - Se apenas definirmos a função com o function e não executarmos mesma, nada que estiver dentro dela irá acontecer.

* Argumentos podem ser funções
  - chamadas de funções de Callback, geralmente são funções que ocorrem após algum evento.
    <!-- 
    addEventListener('click', () => {
    console.log('Clicou');
    });
    -->
    - A função possui dois argumentos
    - A primeira é a string 'click'
    - A segunda é uma função anônima
  - Funções anônimas são aquelas que o nome da função não é definido, escritas como (function() {}) ou (() => {})

* Pode ou não retornar um valor
  - Quando não definimos o retorn, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
  <!-- 
  function imc(peso, altura) {
    imc = peso / altura ** 2;
    console.log(imc);
  }

  imc(80, 1.7); // Retorna o imc
  console.log(imc(80, 1.7)); // Retorna o imc e undefined 
  -->

* Valores retornados 
  - Uma função pode retornar qualquer outro tipo de dado e até outras funções.
    <!-- 
    function terceiraIdade(idade) {
      if (typeof idade !== 'number') {
        return 'Preencha com número';
      } else if (idade >= 60) {
        return true;
      } else {
        return false;
      }
    } 
    console.log(terceiraIdade('80'));
    Retorna: Preencha com número.
    -->
  - Retorna diferentes tipos de dados na mesma função não é uma boa ideia.

* Escopo
  - Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
    <!-- 
    function precisoVisitar(paisesVisitados) {
      var totalPaises = 193
      return `Ainda faltam ${totalPaises - paisesVisitados} paises`
    }

    console.log(totalPaises) // Erro, totalPaises não definido.
    --> 

* Escopo Léxico
  - Funções conseguem acessar variáveis que foram criadas no contexto (pai).
    <!-- 
    var profissao = 'Designer';

    function dados() {
      var nome = 'Natan';
      var idade = 28;
      function outroDados() {
        var endereco = 'São Paulo';
        var idade = 23;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
      }
      return outroDados();
    }

    console.log(dados()); // Retorna 'Natan, 23, São Paulo, Designer'
    console.log(outroDados()) // Retorna um erro;
    -->

* Hoisting 
  - Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória.
    <!-- 
    imc(80, 1.80) // imc aparece no console

    function imc(peso, altura) {
      imc = (peso / altura ** 2)
      console.log(imc)
    } 
    -->

* Exercício
  <!-- 
  // Crie uma função para verificar se o valor é truthy
  function verificarValor(valor) {
  return console.log(!!valor);
  }
  verificarValor(23);
  Retorna: true.

  // Crie uma função matemática que retorne o perímetro de um quadrado
  // Lembrando: perímetro é a soma dos quadros lados do quadrado
  function Quadrado(lado) {
    return console.log(lado * 4);
  } 
  Quadrado(5, 5, 5, 5);
  Retorna: 20.

  // Crie uma função que retorne seu nome completo
  // Ela deve possuir os parâmetros: nome e sobrenome
  function nomeCompleto(nome, sobrenome) {
    return console.log(`${nome} ${sobrenome}`);
  }
  nomeCompleto('Edson', 'Silva');
  Retorna: Edson Silva.

  // Crie uma função que verifique se o número é par
  function Par(numero) {
    var verNum = numero % 2;
    if (verNum / 2 == 0) {
      return console.log(`${numero} é par`);
    } else {
      return console.log(`${numero} é impar`);
    }
  }
  Par(88);

  // Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
  function tipoDado(dado) {
    return console.log(typeof dado);
  }
  tipoDado(5);
  Retorna: number.

  // addEventListener é uma função nativa do javascript
  // o primeiro parâmetro é o evento que ocorre e o segundo o Callback
  // utilize essa função para mostrar no console quando o evento 'scroll' ocorrer
   addEventListener('scroll', () => {
    console.log('Evento está funcionando');
   });

  // Corriga o erro abaixo
  var totalPaises = 193;

  function precisoVisitar(paisesVisitados) {
    return console.log(
      `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`,
    );
  }

  function jaVisitei(paisesVisitados) {
    return console.log(
      `Já visitei ${paisesVisitados} do total de ${totalPaises} países`,
    );
  }
  precisoVisitar(20);
  jaVisitei(20); 
  -->
