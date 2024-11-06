# Módulo Back-end

## Tarefa - Interface WEB

- Objetivo:
  - O Objetivo desta tarefa é criar uma interface web que consuma os dados da API [Random User Generator](http://randomuser.meLinks).

- Dicas:
  - Conforme mostrado na aula 3 do módulo. Você deve consultar a API e tratar os dados para pegar somente o nome, email, data de nascimento e idade.
  
  - Você deve tratar esses dados e enviar para um banco de dados próprio. Divirtam-se.

- O que entregar?
  - Link do Readme do seu GitHub dentro da plataforma.

## Executando projeto

- Para persistência dos dados, foi utilizado o banco de dados não relacional (NoSQL) MongoDB

- Gerar uma string de conexão do MongoDB;

- Criar um arquivo **.env** na raiz do projeto;

- Adicionar no arquivo **.env** a string de conexão para o banco de dados;
  - Exemplo: ``` MONGO_URI=aqui_vem_a_string_de_conexao_com_o_banco ```

- Baixar dependências
  - ``` npm install ```

- Executar servidor
  - ``` npm run start ```

- Acessar interface pelo navegador
  - ``` http://localhost:3000/ ```
