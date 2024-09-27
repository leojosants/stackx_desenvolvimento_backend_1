# Módulo Back-end

## Tarefa - Construção de APIs

O que devo fazer?

🎯 Objetivo:

- O projeto tem como objetivo complementar a construção de APIs e o projeto  apresentado em aula ao vivo, aprofundando o aprendizado adquirido no módulo.
Nesta tarefa, você deverá modificar a estrutura do projeto apresentado, aplicando  conceitos de persistência de dados, validação e documentação.

- Será necessário  criar novas entidades de dados, diferentes de "items", e adaptar as funções para essas novas estruturas. Além disso, você deverá implementar validações  específicas de acordo com a nova entidade criada, ajustando as regras de negócio conforme o contexto. Essas modificações irão reforçar sua compreensão  sobre os módulos nativos do Node.js, como o fs, além de explorar boas práticas de validação e organização de código em APIs.

📝 Passo 1:

🎯 Implementar Persistência de Dados em Arquivo

- Modificar o projeto para que os dados não sejam perdidos quando o servidor reinicia. Salve o array de dados em um arquivo JSON e carregue-o quando a  aplicação iniciar. É importante que você modifique os dados para refletirem a  nova entidade criada, que será diferente de "items".

🎯 Objetivos de Aprendizado:

- Utilizar módulos nativos do Node.js (fs) para ler e escrever arquivos.
- Entender a importância da persistência de dados em uma aplicação.
- Praticar a manipulação de JSON em Node.js.

📌 Passos:

- Use fs.readFileSync para ler o arquivo JSON ao iniciar a aplicação.
- Use fs.writeFileSync para salvar o array de dados sempre que ele for modificado (ao criar, atualizar ou deletar um item)

📝 Passo 2:

🎯 Adicionar Validação de Dados

- Implemente a validação dos dados recebidos nas requisições. Assegure-se de  que a nova entidade criada possua campos obrigatórios específicos e que esses campos sejam validados corretamente. Por exemplo, ao invés de name e price, você pode definir campos como title , description ou quantity.

🎯 Objetivos de Aprendizado:

- Validar dados de entrada para garantir a integridade das informações.
- Utilizar middleware no Express para validar as requisições.
- Aprender a usar bibliotecas de validação, como Joi ou express-validator.

🎯 Passos:

- Escolha uma biblioteca de validação ou implemente a validação manualmente.
- Crie middleware para validar o corpo das requisições antes que ele chegue às funções de negócio.
- Envie respostas de erro apropriadas quando a validação falhar, de acordo com as novas regras de validação.

📝 Passo 3:

🎯 Criar Documentação Especificada do Projeto e API no Readme do Repositório no GitHub

- Crie uma documentação detalhada do projeto e da API no arquivo README.md do repositório GitHub. A documentação deve refletir as novas entidades e endpoints criados, oferecendo uma visão clara de como a API funciona.

🎯 Objetivos de Aprendizado:

- Documentar APIs de maneira clara e estruturada.
- Facilitar o entendimento do projeto para outros desenvolvedores.
- Praticar a boa prática de fornecer instruções e exemplos de uso em projetos compartilhados publicamente.

📍 Considerações Finais:

🎯 Você deverá:

- Substituir a entidade "items" por outra entidade de sua escolha (por exemplo, "products", "orders", "customers", etc.).
- Criar novos campos que sejam específicos para essa nova entidade e adaptar as funções CRUD para trabalhar com esses novos dados.
- Implementar as validações necessárias para garantir a consistência dos dados de acordo com a lógica de negócio da nova entidade.

🖥️ Essa tarefa tem como objetivo reforçar o entendimento das principais  funcionalidades de uma API, incentivando a personalização e adaptação do código para novos cenários.

O que entregar?
Link do Readme do seu GitHub dentro da plataforma.
