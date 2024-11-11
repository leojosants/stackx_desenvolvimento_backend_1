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
    CREATE TABLE products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        price FLOAT NOT NULL,
        quantity INT NOT NULL
    );
  ```

- **Criar --> create ```( C )```**

  ```sql
    INSERT INTO products (name, price, quantity) 
    VALUES ('Produto A', 19.99, 100);
  ```

- **Ler --> read ```( R )```**

  ```sql
    SELECT * FROM products;
  ```

- **Atualizar --> update ```( U )```**

  ```sql
    UPDATE products 
    SET quantity = 150 
    WHERE name = 'Produto A';
  ```

- **Deletar --> delete ```( D )```**

  ```sql
    DELETE FROM products 
    WHERE name = 'Produto A';
  ```
