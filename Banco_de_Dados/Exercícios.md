# 01 - Apenas com as mulheres.
    select nome, sexo from gafanhotos
    where sexo = 'F';

# 02 - Nome de todos que nasceram entre (01/01/2000 - 31/12/2015).
    select nome, nascimento from gafanhotos
    where nascimento between '2000-01-01' and '2015-12-31'
    order by nascimento;

# 03 - Homens que trabalham como programadores.
    select nome, profissao from gafanhotos
    where sexo = 'M' and profissao = 'programador';

# 04 - Todos os dados de mulheres brasileira com nome começando por J.
    select * from gafanhotos
    where sexo = 'F' and nacionalidade = 'Brasil' and nome like 'J%';

# 05 - Lista com nome e nacionalidade de todos os homens com silva, não brasileiros e pesam   menos de 100kg.
    select nome, nacionalidade from gafanhotos
    where sexo = 'M' and nome like '%Silva%' and nacionalidade != 'Brasil' and peso < 100;

# 06 - Maior altura dos homens que moram no Brasil.
    select max(altura) from gafanhotos
    where sexo = 'M' and nacionalidade = 'Brasil';

# 07 - Qual a média de peso de todos cadastrados.
    select avg(peso) from gafanhotos;

# 08 - Menor peso de mulheres não brasileiras e nasceram entre (1990/01/01 - 31/12/2000)
    select min(peso) from gafanhotos
    where sexo = 'F' and nacionalidade != 'Brasil'                                              and nascimento between '1990-01-01' and '2000-12-31';

# 09 - Quantas mulheres tem mais de 1.90 de altura.
    select count(sexo) from gafanhotos
    where sexo = 'F' and altura > '1.90';    

# 10 - Lista de profissões e seus quantitativos.
    select profissao, count(*) from gafanhotos
    group by profissao;

# 11 - Quantos homens e mulheres nasceram após (01/01/2005)
    select sexo,count(sexo) from gafanhotos
    where nascimento > '2005-01-01'
    group by sexo;

# 12 - Quantas pessoas nasceram fora do brasil, mostrando país de origem e o total de pessoas nascidas lá. Mostrar apenas os países que tiveram mais de 3 pessoas com essa nacionalidade.
    select nacionalidade, count(*) from gafanhotos
    where nacionalidade != 'Brasil'
    group by nacionalidade
    having count(nacionalidade) > 3;

# 13 - Lista agrupada pela altura, mostrando quantas pessoas estão acima de 100kg e estão acima da média da altura de todos.
    select altura, count(peso) from gafanhotos
    where peso > 100
    group by altura
    having altura > (select avg(altura) from gafanhotos);
