* Objetos
  - Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
    <!-- 
    var pessoa = {
      nome: 'Natan',
      idade: 23,
      profissao: 'Auxiliar',
      possuiFaculdade: true,
    };

    console.log(pessoa.nome); // Natan
    console.log(pessoa.idade); // 23 
    -->
  - Propriedades e métodos consistem em nome (chave) e valor.

* Métodos
  - É uma propriedade que possui uma função no local do seu valor.
    <!-- 
    var quadrado = {
      lados: 4,
      area: function (lado) {
        return lado * lado;
      },
      perimetro: function (lado) {
        return this.lados * lado;
      },
    };

    console.log(quadrado);
    console.log(quadrado.area(5));
    console.log(quadrado.perimetro(5)); 
    -->
  - Abreviação de area: function(){} para area(){}, no ES6+.
    <!-- 
    var quadrado = {
      lados: 4,
      area(lado) {
        return lado * lado;
      },
      perimetro(lado) {
        return this.lados * lado;
      },
    };

    console.log(quadrado.area(3)); // 9
    console.log(quadrado.perimetro(3)); // 12 
    -->

* Orgazinar código
  - Objetos servem para organizar código em pequenas partes reutilizáveis.
    <!-- 
    Math.PI // 3.14
    Math.random() // número aleatório

    var pi = Math.PI
    console.log(pi) // 3.14 
    -->
  - (Math) é um objeto nativo JavaScript. Já percebeu que (Console) é um objeto e (log()) um método.

* Criar um objeto
  - Um objeto é criado utilizando as chaves {}.
    <!-- 
    var pessoa = {};
    var carro = {};

    console.log(typeof carro) // 'object' 
    -->

* Dot Notation get
  - Acesse a propriedade de um objeto utilizando o ponto.
    <!-- 
    var menu = {
      width: 800,
      height: 50,
      backgroundColor: 'red' 
    }
    var bg = menu.backgroundColor // '#red'

    console.log(bg) // red 
    -->

* Dot Notation set
  - Substitua o valor de uma propriedade utilizando ponto (.) e o (=) após o nome da mesma.
    <!-- 
    var menu = {
      width: 800,
      height: 50,
      backgroundColor: 'red',
    };

    menu.backgroundColor = 'white';
    console.log(menu.backgroundColor); // white 
    -->

* Adicionar Propriedades e Metódos
  - Basta adicionar um novo nome e definir o valor.
    <!-- 
    var menu = {
      width: 800,
    };

    menu.height = 50;
    menu.position = 'fixed'; 
    -->

* Palavra-chave this
  - (this) irá fazer um referência ao próprio objeto.
    <!-- 
    var height = 120
    var menu = {
      width: 800,
      height: 50,
      metadeHeight(){
        return this.height / 2
      }
    }

    console.log(menu.metadeHeight()) // 25
    // sem o this, seria 60 
    -->
  - this irá retornar o próprio objeto.

* Prótotipo e Herança
  - O Objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
    <!-- 
    var menu = {
      width : 700,
    }

    console.log(menu.hasOwnProperty('width'))
    console.log(menu.hasOwnProperty('height'))
    -->
  - hasOwnProperty é um método de Object.

* Exercício
  <!-- 
  // Crie um objeto com seus dados pessoais
  // Deve possuir pelo menos duas propriedades nome e sobrenome
  var dadosPessoais = {
    nome: 'Natan',
    sobrenome: 'Silva',
  };
  console.log(dadosPessoais); // Retorna: {nome: 'Natan', sobrenome: 'Silva'}

  // Crie um método no objeto anterior que mostre seu nome completo
  dadosPessoais.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
  };
  console.log(dadosPessoais.nomeCompleto()); // Retorna: Natan Silva

  // Modifique o valor da propriedade preco para 3000
  var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  };
  carro.preco = 3000;
  console.log(carro.preco); // Retorna: 3000

  // Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
  var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir(ver) {
      if (ver === 'homem') {
        return console.log('Cachorro está latindo');
      } else {
        return console.log('Cachorro não latiu');
      }
    },
  };
  console.log(cachorro.latir('homem')); // Retorna: Cachorro está latindo 
  -->

