## Comandos no Window:
* window.alert - instrui o navegador a exibir uma caixa de diálogo com uma mensagem opcional e a aguardar até que o usuário descarte a caixa de diálogo.
* window.confirm - instrui o navegador a exibir uma caixa de diálogo com uma mensagem opcional e a aguardar até que o usuário confirme ou cancele a caixa de diálogo.
* window.prompt - exibe uma caixa de diálogo com uma mensagem opcional solicitando ao usuário a entrada de algum texto.
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Regras Js:
* // - Para comentário de linha
* /* */ - Para comentário completo
* + - Operador de concatenação
* = - "Recebe".
* var/let - Define as Variáveis.
  - var:declara uma variável, opcionalmente é possível atribuir à ela um valor em sua inicialização.
  - let:Declara uma variável local no escopo do bloco atual, opcionalmente   iniciando-a com um valor.
* number - Todos os tipos de números:
  - Infinity.
  - NaN.
* string - Todos os tipos de caracteres e números desde que esteja dentro de aspas.
* boolean -  Falso ou Verdadeiro (True ou False).
* null - Nulo "Vazio".
* undefined - Indefinido
* object - Objeto
  - array.
* function - Função
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Operadores:
* Aritméticos - (+, -, *, /, % "Resto da divisão", ** "Potencia").
* Simplicação - (N = N + 1) \ (N += 1) \ (N++ "Incrementação depois") \   
 (++N "Incrementação antes").
* Relacionais - (>, <, >=, <=, ==, !="Diferente de").
* Identidade - (=== "Testa se os valores são idênticos", !== "Desiguais").
* Lógicos - (!= "Negação {não}", && "Conjução {e}", || "Disjunção {ou}").
* Ternário - (Teste, ?, True, :, False).
* Typeof -  retorna uma cadeia de caracteres que indica o tipo do valor do operando.
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Conversões:
* Number.parseInt - Converter para número inteiro.
* Number.parseFloat - Converter para número real.
* Number - Simplificar a conversão.
* String - Converter em caracteres.
* .toString - Conventer direto em uma string.
* .toLenght - Mostra quantos caracteres a string tem.
* .toUpperCase() - Coloca tudo em letra Maiúsculas.
* .toLowerCase() - Coloca tudo em letra Minúsculas.
* .toFixed() - Formata um número utilizando notação de ponto fixo.
* .Replace() - Trocar um elemento por outro.
* .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) - Retorna uma string com uma representação sensível a  linguagem deste número (no caso Brasil).
* `` - Template String usado para facilitar na escrita de formatação.
* ${} - utilizar variáveis dentro do template string.
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Comandos Js:
* document.write - Digite algo na tela.
* document.URL - Retorna a Url do documento.
* document.body.style - Mudar a Css via javaScript
* console.log - O método grava (registra) uma mensagem no console.
* console.assert =- Escreve uma mensagem de erro para o console se a afirmação é falsa. Se a firmação é verdadeira, nada acontece.
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Seletores:
* [] - Seletor (Começa do 0)
* innerText - Retorna o texto interno de um elemento
* InnerHTML - Define ou retorna o conteúdo HTML (HTML interno) de um elemento.
* getElementsById() - Retorna o elemento selecionado por Id.
* getElementsByName() - Retorna o elemento selecionado por Name.
* getElementsByTagName() - Retorna o elemento selecionado por Tag.
* getElementsByClassName() - Retorna o elemento selecionado por Classe.
* querySelector() - Retorna o primeiro Elemento dentro do documento que corresponde ao especificado seletor, ou grupo de seletores (possível utilizar CSS).
* querySelectorAll() - Retorna uma lista de elementos presentes no documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que coincidam com o grupo de seletores especificado.
* setAttribute - Define o valor de um atributo no elemento especificado.
* createElement - Cria o elemento HTML especificado por tagName.
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Eventos:
* Adicionar 'on' antes do evento quando estiver usando js interno.
* mouseenter - Ocorre quando o mouse entra em um elemento.
* mousemove - Ocorre quando o mouse se move sobre um elemento.
* mousedown - Ocorre quando pressiona o mouse sobre um elemento.
* mouseup - Ocorre quando solta o mouse após pressionar sobre um elemento.
* click - Ocorre quando clica rápido o mouse sobre um elemento.
* mouseout - Ocorre quando o mouse saí do elemento.
* keydown - O usuário pressiona uma tecla do teclado.
* load - O navegador terminou de carregar a página.
* change - Quando um elemento HTML for alterado.
--Mais eventos-- "https://developer.mozilla.org/en-US/docs/Web/Events"
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Condições:
* if () - Uma condição (Sí)
* else - Uma Condição oposta do if (Se não)
* switch - Condição de escolha 
* case 'valor': - valores dentro do switch
* break - obrigatório após o case
* default - caso não haja escolha ele será executado
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Repetições:
* Repetição com Condição no começo - while (Condição)
* Repetição com Condição no final - do - While (Condição)
* Repetição com variável de controle - for (ínicio; teste; incremento)
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Métodos:
* AddEventListener - O método anexa um manipulador de eventos a um elemento.
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Objetos:
* get - Após a variável para buscar um objeto.
* new Date() - cria um objeto de data com a data e a hora atuais.
* getHours() - Horário atual.
* appendChild() - Adiciona um nó ao final da lista de filhos de um nó pai especificado.
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Símbolos:
Algumas outras entidades suportadas por HTML - https://www.w3schools.com/html/html_symbols.asp
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Outros:
* function nome (parametros){}
* u\{1F595} - colocar emoji
* .focus() -  define o foco no elemento especificado
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
## Array:
* Array - são usados para armazenar vários valores em uma única variável.
* [] - seletor do valor começando por 0
* .push() - adiciona um valor no ultimo elemento do array.
* .length - mostra quantos valores tem em um array.
* .sort() - ordena os valores em ordem crescente.
* .indexOf() - pega o valor selecionado dentro do array.
* for(_ in _) - Repetição funciona apenas para arrays e objetos.