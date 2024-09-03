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

# Desafio (if else)

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

# Funções

- Void: Função que não retorna nenhum valor.
<!--
  void exibirMensagem(String nome, int idade){
  print('Bom dia ${nome}');
  print('Sua idade: ${idade}');
  }
-->

- Caso a função for voltar algum valor, utilizar a Variável do valor no lugar do void e Return no final.
<!--
  double calcularSalario(double salario){
  var total = salario - (salario * 0.1);
  return total;
  }
-->

- Pode usar => quando for função com retorno.
<!--
  double calcularSalario(double salario) =>
  salario - (salario * 0.1)
-->

- Resultado da Aula:
<!--
  void exibirMensagem(String nome, int idade){
  print('Bom dia ${nome}');
  print('Sua idade: ${idade}');
  }

  double calcularSalario(double salario) =>
    salario - (salario * 0.1);

  void totalSalario() {
    double bonus = 500;
    double resultado = calcularSalario(1000) + bonus;
    print('Salário total: ${resultado}');
  }

  void main () {
    exibirMensagem('Edson', 24);
    totalSalario();
  }
-->

# Funções anônimas & parâmetros
  <!-- 
  void exibirDados(String nome, int idade, {double? altura}) {
    // ?? = testa se a variável é nula.
    var novaAltura = altura ?? 1.75;
    print('Nome: ${nome}');
    print('Idade: ${idade}');
    print('Altura: ${novaAltura}');
  }

  // Chamar função dentro de outra função
  // Fazer uma função anônima
  void calcularSalario(double salario, Function a) {
    exibirDados('Natan', 24);
    print('Seu salário: ${salario}');
  }

  void main() {
    // função anônima
    calcularSalario(100, () {
      print('Seu bônus é de: 20');
    });
  } 
  -->

# Classes e Objetos
  <!-- 
  // Classe
  class Casa {
    // Atributos
    String? cor;

    // Métodos
    // void abrirJanela() {
    //   print('Abrir janela da casa ${cor}');
    //   print('Janelas: ${qtdJanelas}');
    // }

    void abrirJanela() {
      print('Abrir janela da casa ${cor}');
    }

    void abrirPorta() {
      print('Abrir porta da casa ${cor}');
    }

    void abrirCasa() {
      // Referencia está classe
      this.abrirJanela();
      this.abrirPorta();
    }
  }

  void main() {
    // Instanciando classe em objeto.
    Casa minhaCasa = Casa();
    minhaCasa.cor = 'Amarela';
    // minhaCasa.abrirJanela();
    // minhaCasa.abrirPorta();
    minhaCasa.abrirCasa();

    // Casa minhaCasa2 = Casa();
    // minhaCasa2.cor = 'Vermelha';
    // minhaCasa2.abrirJanela(10);

    // print(minhaCasa.cor);
  } 
  -->

# Desafio (Classes e Objetos)
  <!-- 
  // Criar classe usuário que tenha dois atributos (usuário e senha)
  // Criar método para autenticar utilizando o if

  class Usuario {
    //Atributos
    String? usuario;
    int? senha;
    bool? autUser;
    bool? autPass;

    //Métodos
    // Verifica o usuário
    void autUsuario(usuario) {
      if (usuario == 'Natan') {
        autUser = true;
      } else {
        autUser = false;
      }
    }

    // Verifica a senha
    void autSenha(senha) {
      if (senha == 123) {
        autPass = true;
      } else {
        autPass = false;
      }
    }

    // Autentica usuário e senha
    void autenticar() {
      var user = autUser;
      var password = autPass;

      if (user == true && password == true) {
        print('Usuário correto');
      } else if (user == true && password == false) {
        print('Senha incorreta');
      } else {
        print('Usuário inexistente');
      }
    }
  }

  void main() {
    Usuario novoUsuario = Usuario();
    novoUsuario.autUsuario('Natan');
    novoUsuario.autSenha(1234);
    novoUsuario.autenticar();
  } 
  -->

# Construtores
  <!-- 
  class Usuario {
    String? usuario;
    String? senha;
    String? cargo;

    //Construtor
    // Usuario(String usuario, String senha) {
    //   this.usuario = usuario;
    //   this.senha = senha;
    //   print('Configurações iniciais do objeto');
    // }

    //Construtor mais prático
    Usuario(this.usuario, this.senha);

    //Named constructor
    Usuario.diretor(this.usuario, this.senha) {
      this.cargo = 'Diretor';
      print('Libera previlégio ${cargo}');
    }

    void autenticar() {
      //Recuperar de um banco de dados
      var usuario = 'Natan@gmail.com';
      var senha = '123';

      if (this.usuario == usuario && this.senha == senha) {
        print('Usuário autenticado');
      } else {
        print('Usuário não autenticado');
      }
    }
  }

  void main() {
    Usuario user = Usuario('Natan@gmail.com', '123');
    // Usuario userDiretor = Usuario.diretor('Natan@gmail.com', '123');
    // user.usuario = 'Natan@gmail.com';
    // user.senha = '123';

    user.autenticar();
  }
  -->

# Getter e Setter
  <!-- 
  class Conta {
    // Boa prática, usar _ para o valor não ser acessado sem usar get
    double saldo = 0;
    double _saque = 0;

    // Getter -> Obter
    double get saque {
      // Validações
      return this._saque;
    }

    // Setter -> Configurar
    set saque(double saque) {
      // Verificações
      if (saque > 0 && saque <= 500) {
        this._saque = saque;
      }
    }
  }

  void main() {
    Conta conta = Conta();
    conta.saque = 700;

    print(conta.saque);
  } 
  -->

# Heranças
  <!-- 
  class Animal {
    String? cor;

    void dormir() {
      print('dormir');
    }
  }

  class Cao extends Animal {
    String? corOrelha;
    void latir() {
      print('Latir');
    }
  }

  class Passaro extends Animal {
    String? corBico;
    void voar() {
      print('Voar');
    }
  }

  void main() {
    Cao cao = Cao();
    Passaro passaro = Passaro();

    cao.cor = 'Branco';
    cao.corOrelha = 'Amarelo';
    print('Cachorro: ${cao.cor} ${cao.corOrelha}');
    cao.latir();

    passaro.cor = 'Vermelho';
    passaro.corBico = 'Preto';
    print('Passaro: ${passaro.cor} ${passaro.corBico}');
    passaro.voar();
  } 
  -->

# Sobrescrita de métodos
  <!-- 
  class Animal {
    String? cor;
    Animal(this.cor);

    void dormir() {
      print('Dormir');
    }

    void correr() {
      print('Correr como um');
    }
  }

  class Cao extends Animal {
    String? corOrelha;

    // Configurar direto na classe
    Cao(String cor, this.corOrelha) : super(cor);

    void latir() {
      print('Latir');
    }

    // @override - sobrepor
    @override
    void correr() {
      // super - adiciona junto ao método pai
      super.correr();
      print('cão');
    }
  }

  class Passaro extends Animal {
    String? corBico;

    Passaro(String cor, this.corBico) : super(cor);

    void voar() {
      print('Voar');
    }

    @override
    void correr() {
      super.correr();
      print('passaro');
    }
  }

  void main() {
    Cao cao = Cao('Marrom', 'Branco');
    Passaro passaro = Passaro('Vermelho', 'Branco');

    print('Cão Cor: ${cao.cor} Cor orelha: ${cao.corOrelha}');
    print('Passaro Cor: ${passaro.cor} Cor bico: ${passaro.corBico}');

    // cao.correr();
    // passaro.correr();
  } 
  -->

# Modificadores Static e Final
  <!-- 
  class Configuracoes {
    // Static - utiliza para acessar classe sem instanciar.
    static String identificadorApp = 'ABCDE456';
    static String notificacaoSom = 'sim';

    static configuracaoInicial() {
      print('Executa configuração iniciais');
    }
  }

  class Conta {
    String? valor;
  }

  void main() {
    // Modificadores Static e Final
    // Configuracoes config = Configuracoes();
    
    // Final declara com objeto final, não pode ser modificado.
    final Conta conta = Conta();
    conta.valor = 'Natan';

    print(conta.valor);

    Configuracoes.configuracaoInicial();
    // print(Configuracoes.identificadorApp);
    // print(Configuracoes.notificacaoSom);
  } 
  -->

# Classes abstratas
  <!-- 
  abstract class Animal {
    String? cor;
    void correr(); // método sem corpo, obriga a classe filha ter o método.
  }

  class Cao extends Animal {
    @override
    void correr() {
      print('Correr');
    }

    void latir() {
      print('Latir');
    }
  }

  class Passaro extends Animal {
    @override
    void correr() {
      print('Correr');
    }

    void voar() {
      print('Voar');
    }
  }

  void main() {
    // Cl abstratas - não consegue instanciar
    // Cl concretas - consegue instanciar
    Cao cao = Cao();
    cao.correr();
    // cao.latir();
  } 
  -->

# Interface
  <!-- 
  // Pode-se dizer a grosso modo, que uma interface é um contrato que
  // ...quando assumido por uma classe deve ser implementado.
  // Interface é utilizada pois podemos ter muitos objetos(classes)
  // ... que podem possuir a mesma ação(método), porém, podem executá-las de
  // ... maneiras diferentes.
  abstract class Presidenciavel {
    void participarEleicao();
  }

  abstract class Jornalismos {
    void escreverArtigo();
  }

  abstract class Cidadao {
    void direitosDeveres() {
      print('Todo cidadão tem direitos e deveres.');
    }
  }

  // implements - implementar interface.
  class Obama extends Cidadao implements Presidenciavel, Jornalismos {
    @override
    void escreverArtigo() {
      print('Escrever Artigo jornal');
    }

    void participarEleicao() {
      print('Eleição nos Estados Unidos para o Obama');
    }
  }

  class Natan extends Cidadao {}

  void main() {
    Obama obama = Obama();
    obama.direitosDeveres();
    obama.participarEleicao();
    obama.escreverArtigo();

    Natan natan = Natan();
    natan.direitosDeveres();
  } 
  -->

# Mixins
  <!-- 
  // Mixins é uma maneira de utilizar códigos
  // ...em múltiplas hierarquias de classes.
  abstract class Presidenciavel {
    void participarEleicao();
  }

  abstract class Jornalismos {
    void escreverArtigo();
  }

  mixin Escrita {
    void escreverArtigo() {
      print('Escrever um artigo para o Jornal');
    }
  }

  abstract class Cidadao {
    void direitosDeveres() {
      print('Todo cidadão tem direitos e deveres.');
    }
  }

  // implements - implementar interface.
  class Obama extends Cidadao implements Presidenciavel, Jornalismos {
    @override
    void escreverArtigo() {
      print('Escrever artigo jornal');
    }

    void participarEleicao() {
      print('Eleição nos Estados Unidos para o Obama');
    }
  }

  // utilizando o mixin com with
  class Natan extends Cidadao with Escrita {}

  void main() {
    Obama obama = Obama();
    obama.direitosDeveres();
    obama.participarEleicao();
    obama.escreverArtigo();

    Natan natan = Natan();
    natan.direitosDeveres();
    natan.escreverArtigo();
  } 
  -->

# Coleções - listas
  <!-- 
  // Coleções, são implementações de estrutura de dados,
  // que é utilizado para armazenar itens
  // list / maps.
  class Usuario {
    String nome;
    int idade;

    Usuario(this.nome, this.idade);
  }

  void main() {
    // Definindo lista sem tipo de variável.
    // List numero = [1, 5, 'Natan'];

    // Definindo lista com tipo de variável.
    List<String> frutas = ['Morango', 'Manga', 'Uva'];

    //Adicionar item
    frutas.add('Banana');
    //Inserir em uma posição
    frutas.insert(0, 'Abacate');
    //Remover item na posição
    frutas.removeAt(0);
    //Remover item por nome
    frutas.remove('Morango');
    //Verificar item na lista
    print(frutas.contains('Uva'));
    //tamanho da lista
    print(frutas.length);

    //Armazenar objetos
    List<Usuario> usuarios = [];
    usuarios.add(Usuario('Natan', 23));
    usuarios.add(Usuario('Leticia', 25));
    usuarios.add(Usuario('Edson', 24));

    // for para percorrer a lista de usuários
    for (Usuario user in usuarios) {
      print(user.nome);
    }
  } 
  -->

# Coleções - mapas
  <!-- 
  // Maps - oferece um indice customizado.

  void main() {
    // List frutas = ['Morango', 'Manga'];

    // Map frutas = Map();
    // frutas['Mo'] = 'Morango';
    // frutas['Ma'] = 'Manga';
    // print(frutas['Mo']);

    //chave -> valor
    Map<int, String> estados = Map();
    estados[0] = 'Sao Paulo';
    estados[1] = 'Minas gerais';
    estados[2] = 'Rio de janeiro';

    // Valores dinâmicos, sem variável especifica.
    Map<String, dynamic> usuarios = Map();
    usuarios['nome'] = 'Natan';
    usuarios['idade'] = '24';

    print(usuarios);

    //Mostra apenas as chaves
    print(estados.keys);
    //Mostra apenas os valores
    print(estados.values);
    //Verificar a existência da chave ou valor
    print(estados.containsKey([4]));
    print(estados.containsValue('Sao Paulo'));

    //Percorrer todos os valores e a chave.
    estados.forEach((chave, valor) => print('${chave} - ${valor}'));
  } 
  -->

# Widgets e Material design
  - https://docs.flutter.dev/ui/widgets.
  - https://m2.material.io/design.

# 







