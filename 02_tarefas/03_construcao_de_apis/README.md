# Módulo Back-end

## Tarefa - Construção de APIs

- Aplicação desenvovida em ```Node.js``` para cadastro de animais, permitindo o gerenciamento ```(CRUD)``` dos dados persistidos em um arquivo no formato ```json```

  - ```C```  --> create  (criar)
  - ```R```  --> read    (ler)
  - ```U```  --> update  (atualizar)
  - ```D```  --> delete  (deletar)

- Para manipulação e persistência dos dados, foi utilizado o módulo ```filesystem```, nativo do Node.js.

### Clonar projeto

```Executar todos os comandos abaixo no terminal Git Bash```

- Passo 1
  - Abra o terminal em um diretório de preferência e execute o comando abaixo para iniciar um repositório vazio:

    ```bash
        git init
    ```

- Passo 2
  - Ainda no terminal aberto, execute o comando abaixo para clonar o projeto:

    ```bash
        git clone https://github.com/leojosants/stackx_desenvolvimento_backend_1.git
      ```

    - OU

    ```bash
        git clone git@github.com:leojosants/stackx_desenvolvimento_backend_1.git
    ```

- Passo 3
  - Ainda no terminal aberto, execute o comando abaixo para navegar até o projeto clonado:

    ```bash
        cd stackx_desenvolvimento_backend_1/02_tarefas/03_construcao_de_apis
    ```

- Passo 4
  - Ainda no terminal aberto, execute o comando abaixo para abrir o projeto no Visual Studio Code (ou algum editor de preferência) e fechar o terminal:

    ```bash
        code . ; exit
    ```

### Executar projeto clonado

```Todos os passos abaixo podem ser realizados no terminal do Visual Studio Code```

- Passo 1
  - Abra um novo terminal.

- Passo 2
  - No terminal, execute o comando abaixo para instalar as dependências contidas no arquivo ```package.json```

    ```bash
        npm install
    ```

- Passo 3
  - No terminal, execute o comando abaixo para iniciar o servidor em modo ```watch```

    ```bash
        npm run nodemon 
    ```

## Exemplo de uso

```http://localhost:3000/api/animals```

## Documentação

Endpoints

- ```GET /api/animals/read-all-animals```

    Retorna todos os animais.

    Resposta:

    ```json
    [
        {
            "animal_id": 1727470916795,
            "animal_name": "bento",
            "animal_type": "gato",
            "animal_color": "preto e branco",
            "animal_breed": "sem raça",
            "animal_description": "é tranquilo e alegre"
        },
        {
            "animal_id": 1727470916796,
            "animal_name": "sushy",
            "animal_type": "gato",
            "animal_color": "marrom e branco",
            "animal_breed": "sem raça",
            "animal_description": "é tranquilo e preguiçoso"
        },
        {
            "animal_id": 1727470916799,
            "animal_name": "tina",
            "animal_type": "gato",
            "animal_color": "marrom rajada",
            "animal_breed": "sem raça",
            "animal_description": "é bipolar"
        },
    ]
    ```

- ```GET /api/animals/read-animal/1727470916795```

    Retorna um animal.

    Resposta:

    ```json
    [
        {
            "animal_id": 1727470916795,
            "animal_name": "bento",
            "animal_type": "gato",
            "animal_color": "preto e branco",
            "animal_breed": "sem raça",
            "animal_description": "é tranquilo e alegre"
        }
    ]
    ```

- ```POST /api/animals/create-animal```

    Adiciona um novo animal.

    Corpo da Requisição:

    ```json
    [
        {
            "animal_name": "bento",
            "animal_type": "gato",
            "animal_color": "preto e branco",
            "animal_breed": "sem raça",
            "animal_description": "é tranquilo e alegre"
        }
    ]
    ```

    Resposta:

    ```json
    [
        {
            "animal_id": 1727470916795,
            "animal_name": "bento",
            "animal_type": "gato",
            "animal_color": "preto e branco",
            "animal_breed": "sem raça",
            "animal_description": "é tranquilo e alegre"
        }
    ]
    ```

- ```PUT /api/animals/update-animal/1727470916795```

    Atualiza um animal.

     Resposta:

    ```json
    [
        {
            "message": "Registro de id 1727470916795 atualizado!"
        }
    ]
    ```

- ```DELETE /api/animals/delete-animal/1727470916795```

    Remove um animal.

    Resposta:

    ```json
    [
        {
            "message": "Registro de id 1727470916795 excluído!"
        }
    ]
    ```

### Dependêcias do projeto

- ``` nodemon ```
  - Ferramenta útil para desenvolvedores de aplicações Node.js, projetada para monitorar alterações nos arquivos do projeto e reiniciar automaticamente a aplicação quando essas mudanças são detectadas.

- ``` express ```
  - Framework web para Node.js que permite criar APIs e servidores web de forma mais fácil e limpa.

- ``` joi ```
  - Biblioteca de validação para objetos JavaScript, amplamente utilizada em aplicações Node.js, especialmente com o framework Express, permitindoa definição de esquemas de validação para garantir que os dados recebidos em requisições (como parâmetros, corpo ou query) estejam no formato correto antes de serem processados.

- ``` joi-translation-pt-br ```
  - Biblioteca que fornece traduções das mensagens de erro de validação do ```Joi``` para o português brasileiro.

### Tecnologias utilizadas

- ``` Postman ```
  - Teste de rotas para requisições HTTP (```get``` - ```post``` - ```put/patch``` - ```delete```):

- ``` Visual Studio Code ```
  - Editor de código (```IDE```):

- ``` node.js ```
  - Ambiente de execução JavaScript:

## Licença

Este projeto está licenciado sob a Licença MIT
