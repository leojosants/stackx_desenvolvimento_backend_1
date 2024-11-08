# Módulo Back-end

## Tarefa - Organização para Banco de Dados

- Para organizar um banco de dados que suporte um sistema semelhante ao Airbnb, com foco em **usuários**, **lugares para hospedagem**, **hospedagens** e **avaliações**, creio que podemos usar um **modelo relacional**.

- Segue abaixo, descrição da estrutura do banco de dados, incluindo as tabelas necessárias e suas relações.

## Estrutura do Banco de Dados

### Tabela: Usuários

- **Descrição**:
  - Armazena informações sobre os usuários da plataforma.

- **Colunas**:
  - id: INT, chave primária, auto-incremento.

  - nome: VARCHAR(100), nome do usuário.

  - email: VARCHAR(100), endereço de e-mail único.

  - senha: VARCHAR(255), senha (armazenada de forma segura).

  - tipo: ENUM('hóspede', 'anfitrião'), tipo de usuário.

```sql
    CREATE TABLE usuarios (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        senha VARCHAR(255) NOT NULL,
        tipo ENUM('hóspede', 'anfitrião') NOT NULL
    );
```

### Tabela: Lugares

- **Descrição**:
  - Armazena informações sobre os lugares disponíveis para hospedagem.

- **Colunas**:
  - id: INT, chave primária, auto-incremento.

  - usuario_id: INT, chave estrangeira referenciando ```usuarios(id)```.

  - titulo: VARCHAR(255), título do anúncio.

  - descricao: TEXT, descrição do lugar.

  - endereco: VARCHAR(255), endereço do lugar.

  - preco_por_noite: DECIMAL(10, 2), preço por noite.

```sql
    CREATE TABLE lugares (
        id INT PRIMARY KEY AUTO_INCREMENT,
        usuario_id INT,
        titulo VARCHAR(255) NOT NULL,
        descricao TEXT NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        preco_por_noite DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    );
```

### Tabela: Hospedagens

- **Descrição**:
  - Registra as reservas feitas pelos usuários em lugares específicos.

- **Colunas**:
  - id: INT, chave primária, auto-incremento.

  - usuario_id: INT, chave estrangeira referenciando ```usuarios(id)```.

  - lugar_id: INT, chave estrangeira referenciando ```lugares(id)```.

  - data_inicio: DATE, data de início da hospedagem.

  - data_fim: DATE, data de término da hospedagem.
  
```sql
    CREATE TABLE hospedagens (
        id INT PRIMARY KEY AUTO_INCREMENT,
        usuario_id INT,
        lugar_id INT,
        data_inicio DATE NOT NULL,
        data_fim DATE NOT NULL,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
        FOREIGN KEY (lugar_id) REFERENCES lugares(id)
    );
```

### Tabela: Avaliações

- **Descrição**:
  - Armazena as avaliações feitas pelos usuários sobre as hospedagens.

- **Colunas**:
  - id: INT, chave primária, auto-incremento.

  - hospedagem_id: INT, chave estrangeira referenciando ```hospedagens(id)```.

  - usuario_id: INT, chave estrangeira referenciando ```usuarios(id)```.

  - nota: INT, nota dada pelo usuário (por exemplo, de 1 a 5).

  - comentario: TEXT, comentário adicional sobre a hospedagem.

```sql
    CREATE TABLE avaliacoes (
        id INT PRIMARY KEY AUTO_INCREMENT,
        hospedagem_id INT,
        usuario_id INT,
        nota INT CHECK (nota >= 1 AND nota <= 5),
        comentario TEXT,
        FOREIGN KEY (hospedagem_id) REFERENCES hospedagens(id),
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    );
```

## Relações entre Tabelas

- Usuários e Lugares:
  - Um usuário pode cadastrar vários lugares para hospedagem **```(relação um-para-muitos)```**.

- Usuários e Hospedagens:
  - Um usuário pode fazer várias reservas **```(relação um-para-muitos)```**.

- Lugares e Hospedagens:
  - Um lugar pode ser reservado várias vezes por diferentes usuários **```(relação um-para-muitos)```**.

- Hospedagens e Avaliações:
  - Uma hospedagem pode ter várias avaliações feitas por diferentes usuários **```(relação um-para-muitos)```**.

## Cenário de Uso

- Com essa estrutura de banco de dados:

  - Quando um usuário se cadastrar na plataforma como hóspede ou anfitrião, seus dados são armazenados na tabela **```usuarios```**.
  
  - Os anfitriões podem cadastrar seus lugares na tabela **```lugares```**, associando cada lugar ao seu respectivo usuário.
  
  - Quando um hóspede reserva um lugar, uma nova entrada é criada na tabela **```hospedagens```**, registrando o período da reserva.
  
  - Após a estadia, o hóspede pode deixar uma avaliação na tabela **```avaliacoes``**`, permitindo que outros usuários vejam feedback sobre as hospedagens.

## Conclusão

- Essa organização do banco de dados permite gerenciar eficientemente os principais aspectos do sistema.

- A estrutura relacional garante a integridade dos dados e facilita consultas complexas para obter informações relevantes sobre **usuários**, **lugares** e **avaliações**.
