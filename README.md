# Node FastFeet
Esse desafio faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack, por isso é fundamental que ele seja feito com muito empenho!

## Iniciando back-end do GoBarber

### Ambiente e conceitos

* <strong>Cofigurando estrutura</strong>
* <strong>Nodemon & Sucrase</strong>
* <strong>Conceito do Docker</strong>
* <strong>Configuração do Docker</strong>
  <p>Comandos:</p>
  <p>docker --name fastfeet -e POSTGRES_PASSWORD=minhasenha -p 5432:5432 -d postgres</p>

* <strong>Sequelize & MVC</strong>
  <p>npm i sequelize</p>
  <p>npm i sequelize-cli --save-dev</p>

* <strong>Eslint, Prettier & Editorconfig</strong>
  <p>npm i eslint --save-dev</p>
  <p>npx eslint --init</p>
  <p>? How would you like to use ESLint? To check syntax, find problems, and enforce code style</p>
  <p>? What type of modules does your project use? JavaScript modules (import/export)</p>
  <p>? Which framework does your project use? None of these</p>
  <p>? Does your project use TypeScript? No</p>
  <p>? Where does your code run? Node</p>
  <p>? How would you like to define a style for your project? Use a popular style guide</p>
  <p>? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript</p>
  <p>? What format do you want your config file to be in? JavaScript</p>
  <br>
  <p>Apos ter realizado as configurações acima as seguintes libs:
  </p>
  <p>
    * <code>npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev</code>
  </p>
  <br>
  <p>No arquivo **_.eslintrc.js_** adicione as regras abaixo:</p>
  <code>
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-param-ressign': 'off',
    'camelcase': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
  </code>
* <strong>Cofigurando Sequelize</strong>

### Cadastro e autenticação de usuários

* <strong>Migration de usuário</strong>
* <strong>Criando loader de models</strong>
* <strong>Cadastro de usuários</strong>
* <strong>Gerando hash da senha</strong>
* <strong>Conceito de JWT</strong>
* <strong>Autenticação JWT</strong>
* <strong>Middleware de autenticação</strong>
* <strong>Update usuário</strong>
* <strong>Validando dados de entrada</strong>
