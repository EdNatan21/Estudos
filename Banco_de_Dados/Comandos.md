# Instruções

- Banco de dadaos -> Tabelas -> Registros são compostos por campos.

- Diferença de tipos (Tipos primitivos) são a quantidade de bytes que eles vão utilizar.

- Modelo relacional, relação entre entidades, pode ser duas ou mais.
  - Entidade = tabela, container.

  - Atributo = coluna. 

  - Relacionamento = relação entre entidades através do atributo. (ex: r)

  - Cardinalidade = Grau da relação entre duas entidades, 
    - n = vários, 1 = único, 0 = nenhum, há outras.

  - Chave Estrangeira = chave primária que relaciona duas entidades.
    - 1 para 1 = relaciona chave primária da entidade para a entidade dominante, ex: 
      [Marido(cpf-esposa)] 1 > (r) < 1 [Esposa(cpf)]

    - 1 para n = relaciona chave primária da entidade (1) para a entidade (n).
      [Funciónario(cpf)] 1 > (r) < n [Dependente(cpf-func)]

    - n para n = cria uma nova entidade que relaciona (1 para n).
      [Cliente(cpf)] 1 > (r) < n [Compra(cpf-cliente)(cod-prod)] n > (r) < 1 [Produto(cod-prod)]

# MySql Console
  * Mostrar bancos de dados criados
    - show databases;
  * Executar banco de dados
    - use 'nome do banco';
  * Ver qual banco de dados está aberto
    - status;
  * Mostrar quais são as tabelas
    - show tables;
  * Descrever a tabela
    - describe 'nome da tabela';

# Banco de dados
  * Criar
    - create database 'nome do banco'; 

  * Executar
    - use 'nome do banco';

  * Excluir
    - drop database 'nome do banco';

  * Parâmetros
    - Constrains
      - default character set utf8mb4

    - Collation
      - default collate utf8mb4_general_ci;

# Tabelas
* Criar
  - create table 'nome da tabela' (
    Campus Tipo primitivo,
    Campus Tipo primitivo 
    );

* Definir Configuração de Character
  - No final da tabela antes do ponto e vírgula
  - default charset = utf8mb4;

* Mostrar estrutura da tabela
  - describe 'nome da tabela';
  - desc 'nome da tabela';

* Inserir valores na tabela
  - insert into 'nome da tabela' (campo)
  - values ('valores'); , Ex:
    - ('1', 'Natan', '23')
  - default para auto incrementar valores
  - Quando a ordem for a mesma da tabela sem ocultar/definir algum campo, pode utilizar:
    <!-- insert into 'nome da tabela' values (valores); -->

* Alterar colunas/campo/atributo
  - Alter table 'nome do campo'

  - adicionar coluna no final
    - add column 'nome' 'tipo';

  - adicionar coluna (campo) em uma posição específica
    - add column 'nome' 'tipo' after 'posição'; 

  - adicionar coluna (ccampo) na primeira posição
    - add column 'nome' 'tipo' first;

  - deletar coluna
    - drop column 'nome';
  
  - modificar apenas o tipo e constraints da coluna
    - modify column 'nome' 'tipo';

  - renomear coluna
    - change column 'nome antigo' 'nome novo' 'tipo';

  - renomear tabela
    - rename to 'nome';

  - Dica, a palavra column é opcional.

* Alterar linhas/valores
  - Alterar valor, ex:
    - update cursos
      set nome = 'Java', carga = '40', ano = '2015'
      where idcurso = '5'
      limit 1; (limitar quantas linhas podem ser modificadas)

  - Remover valor, ex:
    - delete from cursos
      where idcurso = '8'

  - Remover todas as linhas da tabela, ex:
    - truncate table cursos

* Paramêtros
  - Só cria, exclui ou altera a tabela caso ele não exista, ex:
    - create table if not exists 'nome'
  
  - Só cria, exclui ou altera a tabela caso já exista, ex: 
    - create table if exists 'nome'

* Excluir tabela
  - Drop table 'nome';

* Selecionar Tabela 
  - (Select)
    - Selecionar todos os campos de uma tabela
      - select * from 'nome da tabela';
  
    - Filtrar colunas desejadas
      - select 'nome da coluna' from 'nome da tabela';

  - (Select) > (Order By)
    - Selecionar todos os campos de uma tabela em ordem crescente
      - select * from 'nome da coluna' 
        order by nome asc;

    - Selecionar todos os campos de uma tabela em ordem descrescente
      - select * from 'nome da coluna' 
        order by nome desc;

    - Filtrar colunas desejadas e ordenar por coluna escolhida
      - select 'nome da coluna' from 'nome da tabela' 
        order by 'nome da coluna';

  - (Select) > (Where)
    - Filtrar por linha dentro de todas as colunas
      - select * from 'nome da tabela' 
        where 'nome da coluna' = 'atributo desejado'

    - Filtrar por linha dentro da coluna desejada
      - select 'nome da coluna' from 'nome da tabela' 
        where 'nome da coluna' = 'atributo desejado'

  - (Select) > (Where), (In)
    - Filtrar por linha selecionando valores
      - select 'nome da coluna' from 'nome da tabela' 
        where 'nome da coluna'  in ('atributo desejado');

  - (Select) > (Where) > (Between), (And)
    - Filtrar por linha dentro de intervalos
      - select 'nome da coluna' from 'nome da tabela' 
        where 'nome da coluna'  between 'atributo desejado' and 'atributo desejado';

  - (Select) > (Where) > (And)
    - Filtrar a linha por expressões lógicas (e)
      - select * from 'nome da tabela' 
        where 'nome da coluna'  > 'atributo desejado' and 'nome da coluna' < 'atributo desejado';

  - (Select) > (Where) > (And), (Or)
    - Filtrar a linha por expressões lógicas (ou)
      - select * from 'nome da tabela' 
        where 'nome da coluna'  > 'atributo desejado' or 'nome da coluna' < 'atributo desejado';

  - (Select) > (Where) > (Like), (%), (_)  
    - "%" substituí nada/resto de caracter em qualquer posição colocada.
    - "_" exigí que tenha algum caracter onde é posicionado.

    - select * from cursos
      where 'nome do coluna' like 'P%';
        "Mostra todos os cursos que começam por P"

    - select * from cursos
      where 'nome do coluna' like '%A';
        "Mostra todos os cursos que terminam com A"

    - select * from cursos
      where 'nome do coluna' like '%A%';
        "Mostra todos os cursos que possuem A em qualquer lugar"

    - select * from cursos
      where 'nome do coluna' not like '%A%';
        "Mostra todos os cursos que não possuem A em qualquer lugar"

    - select * from cursos
      where 'nome do coluna' like 'Ph%P_';
        "Mostra todos os cursos que começam com PH e terminam com P e algum caracter"

  - (Select) > (Distinct) 
    - Distingui valores da tabela, filtrando sem repetir.
      - select 'nome da coluna' distinct from 'nome da tabela';

  - (Select) > (Count)
    - Agrega valores da coluna, filtrando o total de quantidade.
      - select count('nome da coluna') from 'nome da tabela';

  - (Select) > (Max)
    - Filtra o maior valor/caracter da coluna.
      - select max('nome da coluna') from 'nome da tabela';

  - (Select) > (Min)
    - Filtra o menor valor/caracter da coluna.
      - select min('nome da coluna') from 'nome da tabela';

  - (Select) > (Sum)
    - Soma os valores da coluna.
      - select sum('nome da coluna') from 'nome da tabela';
  
  - (Select) > (Avg)
    - Filtra a média dos valores da coluna.
      - select avg('nome da coluna') from 'nome da tabela';

  - (Select) > (Group by)
    - Agrupa todos os registros em ordem
      - select carga from cursos 
        group by carga;

    - Agrupar e agregar
      - select carga, count(*) from cursos 
        group by carga;

  - (Select) > (Group by) > (Having)
    - Agrupa todos os registros e só mostra com os valores desejados
      - select carga, count(*) from cursos 
        group by carga
        having count(*) > 2;

  - (Select) + (Select)
    - Juntar um Select ao outro.
      - select carga, count(*) from cursos
        where ano > 2015
        group by carga  
        having carga > (select avg (carga) from cursos);

* Relacionando as tabelas
  - (Foreign key)
    - Adicionar chave estrangeira, ex:
      - Alter table gafanhotos
        add foreign key (cursopreferido)
        references cursos(idcurso);

  - (Inner join)
    - Mostrar informações das duas tabelas com junção (somente quem tem relação)
      - select alunos.nome, alunos.cursopreferido, curso.nome, curso.ano 
        from alunos join cursos
        on cursos.idcurso = alunos.cursopreferido;

      - (as) serve para apelidar tabelas
        select g.nome, c.nome, c.ano 
        from gafanhotos as g join cursos as c
        on c.idcurso = g.cursopreferido;

  - (Outer join) (left/Right)
    - Mostrar informações das duas tabelas com junção (todos, mesmo os que não tem relação)
      - left outer join = da preferência à tabela da esquerda
      - right outer join = da preferência à tabela da direita
      - select g.nome, c.nome, c.ano 
      from gafanhotos as g left outer join cursos as c
      on c.idcurso = g.cursopreferido;  

  - (Inner join) com várias tabelas, ex:
    - criar tabela de relacionamento
      create table g_assiste_c(
      id int primary key auto_increment,
      data date,
      idgafanhoto int,
      idcurso int,
      foreign key (idgafanhoto) references gafanhotos(id),
      foreign key (idcurso) references curso(idcurso)
      ) default charset = utf8;

    - inserir valores
      insert into g_assiste_c values
      (default, '2014-03-01', '1', '2');

    - Filtrar os valores da tabela
      select g.nome, c.nome from gafanhotos g
      join g_assiste_c a
      on g.id = a.idgafanhoto
      join cursos c
      on c.id = a.idcurso;

# Constraints (Restrições)
* Chave primária (ex: identificador)
  - primary key (id)
  
* Obrigar a preencher os dados
  - not null

* Preencher caso fique vazio (nacionalidade ex:)
  - default brasil

* Auto Preencher (1,2,3,...)
  - auto_increment

* Não deixa repetir o mesmo nome
  - Unique

* Bloqueia a inserção de valores negativos
  - Unsigned

# Comandos
* DDL 'Data Definition Language' : Comandos de definição
  - Create Table, Create Database, Alter Table, Drop table

* DML 'Data Manipulation Language' : Comandos de manipulação
  - Insert into, Uptade, Delete, Truncate

* DQL 'Data Query Language'
  - Select