# Módulo Back-end

## Tarefa - Organização para Banco de Dados

- Para organizar um banco de dados que suporte um sistema semelhante ao Airbnb, com foco em **usuários**, **lugares para hospedagem**, **hospedagens** e **avaliações**, creio que podemos usar um **modelo relacional**.

- Segue abaixo, descrição da estrutura do banco de dados, incluindo as tabelas necessárias e suas relações.

## Estrutura do Banco de Dados

### Tabela: Usuários (users)

- **Descrição**:
  - Armazena informações sobre os usuários da plataforma.

- **Colunas**:
  - id: INT, chave primária, auto-incremento.

  - name: VARCHAR(100), nome do usuário.

  - email: VARCHAR(100), endereço de e-mail único.

  - password: VARCHAR(255), senha (armazenada de forma segura).

  - type: ENUM('hóspede', 'anfitrião'), tipo de usuário.

```sql
    CREATE TABLE users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        type ENUM('hóspede', 'anfitrião') NOT NULL
    );
```

### Tabela: Lugares (places)

- **Descrição**:
  - Armazena informações sobre os lugares disponíveis para hospedagem.

- **Colunas**:
  - id: INT, chave primária, auto-incremento.

  - user_id: INT, chave estrangeira referenciando ```users(id)```.

  - title: VARCHAR(255), título do anúncio.

  - description: TEXT, descrição do lugar.

  - address: VARCHAR(255), endereço do lugar.

  - price_per_night: DECIMAL(10, 2), preço por noite.

```sql
    CREATE TABLE places (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        address VARCHAR(255) NOT NULL,
        price_per_night DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
```

### Tabela: Hospedagens (accommodation)

- **Descrição**:
  - Registra as reservas feitas pelos usuários em lugares específicos.

- **Colunas**:
  - id: INT, chave primária, auto-incremento.

  - user_id: INT, chave estrangeira referenciando ```users(id)```.

  - place_id: INT, chave estrangeira referenciando ```places(id)```.

  - start_date: DATE, data de início da hospedagem.

  - end_date: DATE, data de término da hospedagem.
  
```sql
    CREATE TABLE accommodation (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT,
        place_id INT,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (place_id) REFERENCES places(id)
    );
```

### Tabela: Avaliações (reviews)

- **Descrição**:
  - Armazena as avaliações feitas pelos usuários sobre as hospedagens.

- **Colunas**:
  - id: INT, chave primária, auto-incremento.

  - hosting_id: INT, chave estrangeira referenciando ```accommodation(id)```.

  - user_id: INT, chave estrangeira referenciando ```users(id)```.

  - note: INT, nota dada pelo usuário (por exemplo, de 1 a 5).

  - comment: TEXT, comentário adicional sobre a hospedagem.

```sql
    CREATE TABLE reviews (
        id INT PRIMARY KEY AUTO_INCREMENT,
        hosting_id INT,
        user_id INT,
        note INT CHECK (note >= 1 AND note <= 5),
        comment TEXT,
        FOREIGN KEY (hosting_id) REFERENCES accommodation(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
```

## Relações entre Tabelas

- Usuários (users) e Lugares (places):
  - Um usuário pode cadastrar vários lugares para hospedagem **```(relação um-para-muitos)```**.

- Usuários (users) e Hospedagens (accommodation):
  - Um usuário pode fazer várias reservas **```(relação um-para-muitos)```**.

- Lugares (places) e Hospedagens (accommodation):
  - Um lugar pode ser reservado várias vezes por diferentes usuários **```(relação um-para-muitos)```**.

- Hospedagens (accommodation) e Avaliações (reviews):
  - Uma hospedagem pode ter várias avaliações feitas por diferentes usuários **```(relação um-para-muitos)```**.

## Cenário de Uso

- Com essa estrutura de banco de dados:

  - Quando um usuário se cadastrar na plataforma como hóspede ou anfitrião, seus dados são armazenados na tabela **```users```**.
  
  - Os anfitriões podem cadastrar seus lugares na tabela **```places```**, associando cada lugar ao seu respectivo usuário.
  
  - Quando um hóspede reserva um lugar, uma nova entrada é criada na tabela **```accommodation```**, registrando o período da reserva.
  
  - Após a estadia, o hóspede pode deixar uma avaliação na tabela **```reviews```**, permitindo que outros usuários vejam feedback sobre as hospedagens.

## Conclusão

- Essa organização do banco de dados permite gerenciar eficientemente os principais aspectos do sistema.

- A estrutura relacional garante a integridade dos dados e facilita consultas complexas para obter informações relevantes sobre **usuários**, **lugares** e **avaliações**.
