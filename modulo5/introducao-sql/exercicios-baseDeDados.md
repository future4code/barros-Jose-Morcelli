## Exercício 1 --------------------

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "002", 
  "BILL",
  1200,
  "1953-05-23", 
  "male"
);
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id,nome, salary, birth_date, gender)
VALUES(
  "004",
  "Raul Cortez",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  71933333,
  "1979-03-26", 
  "female"
);
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "006", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
SELECT * FROM Actor;
SELECT * FROM Actor
WHERE gender = "female";
SELECT nome,salary FROM Actor 
WHERE nome = "Tony Ramos";
SELECT * From Actor 
WHERE genery = "invalid";
SELECT id, nome, salary FROM Actor 
WHERE salary < 500000;
SELECT id, nome from Actor 
WHERE id = "002";
SELECT * FROM Actor 
WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salary > 300000;
SELECT * FROM Actor 
WHERE ( nome NOT LIKE "A%" ) AND salary > 350000;
SELECT * FROM Actor 
WHERE nome LIKE "%G%" OR nome LIKE "%g%" ;
SELECT * FROM Actor 
WHERE ( nome LIKE "%a%" OR nome LIKE "%A%" OR nome LIKE "%g%" OR nome LIKE "%G%" ) AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Movie (
id VARCHAR (255) PRIMARY KEY,
nome VARCHAR (255)NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
);

INSERT INTO Movie (id, nome, synopsis, release_Date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

INSERT INTO Movie (id, nome, synopsis, release_Date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO Movie (id, nome, synopsis, release_Date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8 
);

INSERT INTO Movie (id, nome, synopsis, release_Date, rating)
VALUES(
"004",
"Minha Mãe É uma Peça",
"Dona Hermínia é uma mulher de meia idade, divorciada do marido, que a trocou por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina e Juliano, que já estão bem grandinhos. Um dia, após descobrir que eles a consideram uma chata, resolve sair de casa sem avisar ninguém, deixando todos, de alguma forma, preocupados com o que teria acontecido. Mal sabem eles que a mãe foi visitar a querida tia Zélia para desabafar suas tristezas do presente e recordar os bons tempos do passado.",
"2013-06-21",
8 
);
SELECT * FROM Movie;
SELECT id, nome, rating FROM Movie WHERE id = "002";
SELECT * FROM Movie WHERE nome = "Minha Mãe é uma Peça";
SELECT id, nome, synopsis, rating FROM Movie WHERE rating <= 7;
SELECT * FROM Movie WHERE nome LIKE "%você%";
SELECT * FROM Movie WHERE nome LIKE "%Flor" OR synopsis LIKE "%Dona%";
SELECT * FROM Movie WHERE release_date < "2022-11-08";
SELECT * FROM Movie WHERE release_date < "2022-11-08" AND (nome LIKE "%Peça%" OR synopsis LIKE "%mulher%") AND rating > 7;

* a)R: O comando VARCHAR é usado para guardar strings de tamanho variável e usa alocação dinámica de memória.
-- O comando DATE se trata de uma data simples. O MySQL exibe dados teste tipo no padrão 'AAAA-MM-DD'
-- O comando PRIMARE KEY identifica exclusivamente cada registro em uma tabela. As PRIMARE KEY devem conter valores UNIQUE e não podem conter valores NULL.
-- O comando NOT NULL impõe que uma coluna NÃO aceite valores NULL. Isso impõe que um campo sempre contenha um valor, o que significa que você não pode inserir 
-- um novo registro ou atualizar um registro sem adicionar um valor a esse campo.

* b)R: Quando eu uso o comando SHOW DATABASES ele infoma meu name do Workbench MySQL meu name da base de dados.
-- Quando eu uso o comando SHOW TABLES ele me mostra as tabelas criadas no Workbench MySQL.

* c)R: Quando eu informo DESCRIBE Actor ele me mostra toda a tabela com id , nome , salary , birth_date, gender sem nenhum dado.

## Exercício 2 -----------------

* a)R: FEITO.

* b)R: Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. Ele informa que o id foi duplicado e não é permitido por conta das chaves primarias que são unicas.

* c) R: Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'INSERT 
-- INTO Actor (id, nome, salary) VALUES(   "003",    "Fernanda Montenegro" at line 22)
-- ele da um erro de sintase faltando informar birth_date, gender.

* d)R: Error Code: 1364. Field 'nome' doesn't have a default value. Da um erro informando que nome nao tem um nome padrão, faltando entao informar o dado nome.

* e)R: Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. Ele informa que possui um erro no formato da data de nascimento faltando as "".

* f)R: FEITO.

## Exercício 3 -------------------

* a)R: SELECT * FROM Actor WHERE gender = "female"

* b)R: SELECT nome, salary FROM Actor WHERE nome = "Tony Ramos"

* c)R: SELECT * From Actor WHERE genery = "invalid" Error Code: 1054. Unknown column 'genery' in 'where clause'
* Erro de coluna desconhecida por nao conter nenhum genery invalido.

* d)R:  SELECT id, nome, salary FROM Actor WHERE salary < 500000

* e)R: SELECT id, nome from Actor WHERE id = "002" NÃO GEROU ERRO

## Exercício 4 -------------------

-- a)R: SELECT * FROM Actor WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salary > 300000
-- A query acima vai um SELECT para selecionar a nossa tabela, * para selecionar toda nossa tabela, 
-- FROM para informar qual tabela iremos mostrar, WHERE para informar a condicao e valores a serem mostrados,
-- LIKE para podemos comparar strings, no caso as letras iniciais que seram mostradas, A% seria a letra inicial a ser mostrada
-- e % para indicar uma string generica, OR para informar que vai ter outro valor a ser mostrado "ou", AND para colocarmos mais 
-- uma condicao e valor no caso "e", e no final o resultado e de nomes com as iniciais A e J com salarios maiores que 300000.

* b)R: SELECT * FROM Actor WHERE ( nome NOT LIKE "A%" ) AND salary > 350000

* c)R: SELECT * FROM Actor WHERE nome LIKE "%G%" OR nome LIKE "%g%" 

* d)R: SELECT * FROM Actor WHERE ( nome LIKE "%a%" OR nome LIKE "%A%" OR nome LIKE "%g%" OR nome LIKE "%G%" ) AND salary BETWEEN > 350000 AND < 900000

## Exercício 5 ------------

* a)R: Feito 
* b)R: Feito
* c)R: Feito 
* d)R: Feito 
8 e)R: Feito

## Exercício 6 -----------

* a)R: SELECT id, título, rating FROM Movie WHERE id = "002"

* b)R: SELECT * FROM Movie WHERE nome = "Minha Mãe é uma Peça"

* c)R: SELECT id, nome, synopsis FROM Movie WHERE rating <= 7

## Exercício 7 ------------

* a)R: SELECT * FROM Movie WHERE nome Like "%você%"

* b)R: SELECT * FROM Movie WHERE nome LIKE "%Flor" OR synopsis LIKE "%Dona%"

* c)R: SELECT * FROM Movie WHERE release_date < "2022-11-08"

* d)R: SELECT * FROM Movie WHERE release_date < "2022-11-08" AND (nome LIKE "%Peça%" OR synopsis LIKE "%mulher%") AND rating > 7;