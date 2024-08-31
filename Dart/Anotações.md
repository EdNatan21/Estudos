# DART

- Linguagem de programação para desenvolvimento mobile, web e server.
- Criada pel Google em 2010.

# Flutter

- SDK, permite criar Apps para Android e IOS.
- Open Source desenvolvida pela Google.

# Executando Código Básico

- Sobre o básico.
  <!-- 
  void main() {
    print('Execução um');
    print('Execução dois');
  } 
  ->
- Vai printar na tela, "Execução 1 e Execução 2".

# Variáveis

- Código:
  <!--
    void main () {
    //Variável e Atribuição
    var nome = 'Natan';
    //Imprimir na tela
    print('${nome}');

    const pi = 3.14;
    print (pi);
    //Var = Variável mudavel
    //Const = Variável imudavel
    }
  -->

# Tipos de Variáveis

  <!-- 
    void main () {
    // Tipo variável genérico
    var nome = 'Natan';

    // Tipos variáveis
    String email = 'Any@hotmail.com'; // Texto
    int numero = 50; // Número inteiros
    double preco = 19.99; // Número decimal
    bool acesso = false; // Verdadeiro ou Falso
    } 
  -->

# Arrays

- Código:
  <!--
    void main () {
    var nomes = [
      'Natan',
      'Edson',
      'Iago',
      'Carol'
    ];

    print (nomes[1]);
    //Mostrará Edson.
    }
  -->

# Operadores Aritméticos

  <!-- 
  void main (){
  /*
    Operadores básico aritiméticos 
    Somar +
    Subtrair -
    Multiplicar *
    Dividir /
  */
    var soma = 5 + 10;
    var multiplicar = 5 * 10;
    var divisao = 5 / 10;
    var subtrair = 5 - 10;
    print ('$soma, $multiplicar, $divisao, $subtrair');
    //15, 50, 0.5, -5.
  } 
  -->

# If else

  <!-- 
  void main () {
  /*
    Controle de Fluxo if else(Estrutura condicional)
    If (Condição) {
      //caso a condição seja verdadeira
    } else {
      //caso a condição não seja verdadeira
    };
  */
  
  //   if( 6 > 5 ){
  //     print('Verdade');
  //   } else {
  //     print('falso');
  //   };

  var usuario = 50;
  
  if (usuario >= 65) {
    print("Usuário é Idoso");
  } 
  else if (usuario >= 14 && usuario < 18){
    print("Usuário é Adolescente");
  }
  else if (usuario < 14) {
    print ("Usuário é Criança");
  } else {
    print("Usuário é Adulto");
  }
  } 
  -->

# Desafio (Aula if else)

- Se a média for maior ou igual a 6 "Aprovado", se não "Reprovado".
<!-- 
void main () {
var media = 6;

if(media >= 6){
print('Aprovado');
} else {
print('Reprovado');
}
}
-->

# Switch

  <!-- 
  void main () {
  var comando = '';
  
  switch (comando){
      case 'depositar':
        print('Deposite um valor');
      break;
      
      case 'sacar':
        print('Saque um valor');
      break; 
      
      default:
        print('Nenhuma opção escolhida');
  }
  }
  -->

# Loops - for & while

- Básico
<!--
void main () {
  // For
  for( int i = 0; i <= 10; i++){
    print(i);
  }

  // While
  var numeros = 0;
  while (numeros <= 6){
    print ('numeros $numeros');
    numeros++;
  }
}
-->

- Com Array
<!-- 
var jogos = [
  'Skyrim',
  'Fallout 4',
  'Cod'
];

for (var item in jogos) {
print(item);
}
-->

- do while
<!-- 
void main () {
var num = 0;

do {
print(num);
num++;
} while (num <= 5);
}
-->

#
