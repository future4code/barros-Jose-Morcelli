# ----------------------- Exercício 1 --------------------------------

* a) R: Uma chave estrangeira é o campo que estabelece o relacionamento entre duas tabelas. Assim, uma coluna corresponde à mesma coluna que é a chave primária de outra tabela.

* b) R: INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Um otimo filme!",
    8,
	"003"
);

* c) Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha R: Quando informamos um id inexistente o sistem nao aceita e forma um erro tanto no id informado, quanto na chave estrangeira.

* d) R: ALTER TABLE  Movie DROP COLUMN  rating;

* e) R: Informa que não é possível apagar o filme pois sua id está vinculada a uma chave estrangeira
DELETE FROM Movie WHERE id = 003;

# ----------------------- Exercício 2 --------------------------------

* a) CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
 R: Essa tabela vingula as tabelas de filmes e atores.

* b) R: INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"004",
    "001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"003",
    "002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"002",
    "004"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"001",
    "006"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"002",
    "006"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"001",
    "002"
);

* c)INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"001",
    "003"
);
 Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha  R: Falha em uma chave estrangeira, porque não consegue associar/localizar o id do filme

 * d) R: Código de erro: 1175. Está a usar o modo de actualização seguro e tentou actualizar uma tabela sem
 um ONDE usa uma coluna KEY.
 DELETE FROM Actor WHERE id = 004;

 # ----------------------- Exercício 3 ------------------------------

 * a) SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
R: O operador ON significa "onde?" pegue as avaliações onde Movies.id 

* b) R: SELECT m.id as movies_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
