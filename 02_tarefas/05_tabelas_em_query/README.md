# Módulo Back-end

## Tarefa - Tabelas em Query

- O que devo fazer?
  
  - Veja essa tabela e escreva a query pedida no fim:
  
    - **Tabela - provas**
      - *Colunas*:
        - id_aluno        ```número```
        - id_materia      ```número```
        - nota            ```número flutuante```
        - data_da_prova   ```data```

      ```sql
        CREATE TABLE provas (
            id_aluno INT,
            id_materia INT,
            nota FLOAT NOT NULL,
            data_da_prova DATE NOT NULL,
            FOREIGN KEY (id_aluno) REFERENCES aluno(id),
            FOREIGN KEY (id_materia) REFERENCES materia(id),
            PRIMARY KEY (id_aluno, id_materia)
        );
      ```

    - **Tabela - aluno**
      - *colunas*:
        - id              ```numero```
        - nome            ```string```
        - data_nascimento ```número```

      ```sql
          CREATE TABLE aluno (
              id INT PRIMARY KEY AUTO_INCREMENT,
              nome VARCHAR(100) NOT NULL,
              data_nascimento DATE NOT NULL
          );
      ```

    - **Tabela - professor**
      - *colunas*:
        - id              ```número```
        - nome            ```string```
        - data_nascimento ```número```

      ```sql
        CREATE TABLE professor (
            id INT PRIMARY KEY AUTO_INCREMENT,
            nome VARCHAR(100) NOT NULL,
            data_nascimento DATE NOT NULL
        );
      ```

    - **Tabela - materia**
      - *colunas*:
        - id            ```número```
        - nome          ```string```
        - id_professor  ```número```

    ```sql
      CREATE TABLE materia (
          id INT PRIMARY KEY AUTO_INCREMENT,
          nome VARCHAR(100) NOT NULL,
          id_professor INT,
          FOREIGN KEY (id_professor) REFERENCES professor(id)
      );
    ```

  - Crie 3 alunos;

    ```sql
      INSERT INTO aluno (nome, data_nascimento) 
      VALUES 
      ('João Silva', '2000-05-15'),
      ('Maria Oliveira', '2001-08-22'),
      ('Pedro Santos', '1999-12-30');
    ```

  - Crie uma matéria e um professor;

    ```sql
      INSERT INTO materia (nome, id_professor) 
      VALUES ('Matemática', 1); -- Supondo que o ID do professor Carlos Pereira seja 1
    ```

    ```sql
      INSERT INTO professor (nome, data_nascimento) 
      VALUES ('Carlos Pereira', '1980-03-10');
    ```

  - Crie 1 prova para cada aluno nessa matéria e diga que nota eles tiraram.  

    ```sql
      INSERT INTO provas (id_aluno, id_materia, nota, data_da_prova) 
      VALUES 
      (1, 1, 8.5, '2024-11-01'), -- João Silva tirou 8.5
      (2, 1, 9.0, '2024-11-01'), -- Maria Oliveira tirou 9.0
      (3, 1, 7.5, '2024-11-01'); -- Pedro Santos tirou 7.5
    ```

- O que entregar?
  - Link do Readme do seu GitHub dentro da plataforma.
