* Tudo é objeto
  - String, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
    <!-- 
    var nome = 'Natan';

    console.log(nome.length); // 5
    console.log(nome.charAt(1)); // 'a'
    console.log(nome.replace('tan', 'than')); // 'Nathan'
    -->
  - Uma string herda propriedades e métodos do construtor (String());

* Número 
  <!-- 
  var altura = 1.8

  console.log(altura.toString()) // 1.8
  console.log(altura.toFixed()) // '2' 
  -->
  - Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos. 

* Funções
  <!-- 
  function areaQuadrado(lado) {
    return lado * lado
  }

  console.log(areaQuadrado.toString())
  // "function areaQuadrado(lado) {
  //   return lado * lado
  // }"
  console.log(areaQuadrado.length) // 1 
  -->

* Elementos do DOM
  <!-- 
  var btn = document.querySelector('.btn')

  btn.classList.add('azul') // adiciona classe azul
  btn.innertext // Clique
  btn.addEventListener('click', function(){
    console.log('clicou')
  }) 
  -->
  - Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

* Objetos revolucionaram a programação
  - Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

* Exercício
  <!-- 
  // Nomeie 3 propriedades ou métodos de strings
  var nome = 'Natan';
  console.log(nome.toLocaleLowerCase()); // Retorna: natan
  console.log(nome.toUpperCase()); // Retorna: NATAN
  console.log(nome.replace('Na', 'Ma')); // Retorna: Mathan

  // Nomeie 5 propriedades ou métodos do DOM
  var btn1 = document.querySelector('.btn');
  // btn1.addEventListener
  // btn1.setAttribute
  // btn1.appendChild
  // btn1.before
  // btn1.removeChild
  -->

