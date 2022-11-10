# ----------------------- Exercício 1 ---------------------

### a) R: Com esse comando excluiriamos a coluna salary de nossa tabela Actor.

### b) R: Com esse comando coluna de gender para sex e manter varchar(6)

### c) R: Com esse comando irá manter o nome da coluna gender e alterar para varchar(255)

### d) R: ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# ----------------------- Exercício 2 --------------------

### a) R: UPDATE Actor SET nome = "Fernanda Montenegro", birth_date = "1950-05-12" WHERE id = "003";

### b) R: UPDATE Actor SET nome = "JULIANA PAES" WHERE nome = "Juliana Paes";
### UPDATE Actor SET nome = "Juliana Paes" WHERE nome = "JULIANA PAES";

### c) R: UPDATE Actor SET nome = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male" WHERE id = "005";

# ----------------------- Exercício 3 --------------------

### a) R: DELETE FROM Actor WHERE nome = "Fernanda Montenegro";

### b) R: DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

# ----------------------- Exercício 4 --------------------

### a) R: SELECT MAX(salary) FROM Actor

### b) R: SELECT MIN(salary) FROM Actor

### c) R: SELECT COUNT(*) FROM Actor WHERE gender = "female";

### d) R: SELECT SUM(salary) from Actor;

# ----------------------- Exercício 5 --------------------
