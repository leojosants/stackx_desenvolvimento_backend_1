# Módulo Back-end

## Tarefa - Item de um CRUD

- O que devo fazer?
  
  - Crie uma tabela fictícia e depois faça uma query para cada item de um CRUD:
    - Criar uma linha;  ```( C )```
    - Selecionar;       ```( R )```
    - Editá-la;         ```( U )```
    - Apaga-la;         ```( D )```

- O que entregar?
  - Link do Readme do seu GitHub dentro da plataforma.

## Solução

- **Criar tabela**

  ```sql
    CREATE TABLE produtos (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        preco FLOAT NOT NULL,
        quantidade INT NOT NULL
    );
  ```

- **Criar --> create ```( C )```**

  ```sql
    INSERT INTO produtos (nome, preco, quantidade) 
    VALUES ('Produto A', 19.99, 100);
  ```

- **Ler --> read ```( R )```**

  ```sql
    SELECT * FROM produtos;
  ```

- **Atualizar --> update ```( U )```**

  ```sql
    UPDATE produtos 
    SET quantidade = 150 
    WHERE nome = 'Produto A';
  ```

- **Deletar --> delete ```( D )```**

  ```sql
    DELETE FROM produtos 
    WHERE nome = 'Produto A';
  ```
