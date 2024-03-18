# Backend Application

Este é o repositório para a aplicação backend desenvolvida com Node.js e Express.

## Tecnologias Utilizadas

- **Express**: Express é um framework web rápido, flexível e minimalista para Node.js. Ele fornece uma variedade de recursos para construir APIs RESTful e servidores web.

- **Prisma**: Prisma é uma camada de acesso a dados moderna e segura para Node.js e TypeScript. Ele simplifica a comunicação com o banco de dados e oferece uma interface de programação de aplicativo (API) limpa e tipada.

- **Cors**: Cors é um pacote Node.js que fornece um middleware para habilitar o Cross-Origin Resource Sharing (CORS) em aplicativos Express.

- **SQLite3**: SQLite3 é um banco de dados SQL incorporado que armazena dados em um arquivo de banco de dados simples. Ele é utilizado neste projeto como um banco de dados leve e fácil de configurar para desenvolvimento.

- **ESLint e TypeScript**: ESLint é uma ferramenta de linting para JavaScript que identifica e reporta padrões problemáticos no código. TypeScript é um superconjunto tipado de JavaScript que oferece verificação de tipo estática. Ambos são usados para garantir a qualidade e consistência do código fonte.

- **Nodemon e ts-node**: Nodemon é uma ferramenta que observa mudanças nos arquivos de origem e reinicia automaticamente o servidor. Ts-node é uma implementação TypeScript para Node.js. Ambos são utilizados para melhorar a experiência de desenvolvimento.

## Estrutura Model-Service-Controller (MSC)

Este projeto segue a estrutura Model-Service-Controller (MSC) para organização do código. A separação em camadas ajuda a manter o código limpo, modular e fácil de manter. Cada camada tem sua responsabilidade definida:

- **Model**: Define a estrutura dos dados e interage com o banco de dados através de Prisma.

- **Service**: Implementa a lógica de negócios da aplicação, manipulando os dados e realizando operações no banco de dados.

- **Controller**: Lida com as requisições HTTP, chama os serviços apropriados e retorna as respostas ao cliente.

## Rotas

A aplicação possui as seguintes rotas:

- **GET /users**: Retorna um array de objetos representando usuários no seguinte formato:

  ```json
  [
    {
      "id": 1,
      "name": "Leo",
      "email": "email@example.com",
      "cpf": "12345678900",
      "phone": "5599202575",
      "status": "Ativo"
    },
    {
      "id": 2,
      "name": "Maria",
      "email": "maria@example.com",
      "cpf": "98765432100",
      "phone": "5599302575",
      "status": "Inativo"
    }
  ]
  ```

- **POST /users/create**: Cria um novo usuário. O corpo da requisição deve conter os seguintes campos: `name`, `email`, `cpf`, `phone` e `status('Ativo', 'Inativo', 'Aguardando ativação', 'Desativado')`.

  ### Exemplo de JSON para POST (formato válido):

  ```json
  {
    "name": "Maria",
    "email": "maria@example.com",
    "cpf": "98765432100",
    "phone": "5599302575",
    "status": "Inativo"
  }
  ```

  ### Exemplo de JSON para POST (formato inválido):

  ```json
  {
    "name": "1Maria",
    "email": "[]",
    "cpf": "987.654.321-00",
    "phone": "(55) 9930-2575",
    "status": "Blablabla"
  }
  ```

- **PUT /users/:id**: Atualiza um usuário existente. O corpo da requisição deve conter os mesmos campos que o POST, além do `id` na URL.

  ### Exemplo de JSON para PUT (formato válido):

  ```json
  {
    "name": "Maria",
    "email": "maria@example.com",
    "cpf": "98765432100",
    "phone": "5599302575",
    "status": "Inativo"
  }
  ```

  ### Exemplo de JSON para PUT (formato inválido):

  ```json
  {
    "name": "1Maria",
    "email": "[]",
    "cpf": "987.654.321-00",
    "phone": "(55) 9930-2575",
    "status": "Blablabla"
  }
  ```

## Middlewares de Validação

Há dois middlewares de validação implementados para garantir a integridade dos dados:

- **createUserValidationMiddleware**: Valida os campos necessários para criar um novo usuário. Retorna um erro 400 com uma lista de mensagens de erro se os campos não estiverem corretos.

- **updateUserValidationMiddleware**: Valida os campos necessários para atualizar um usuário existente. Retorna um erro 400 com uma lista de mensagens de erro se os campos não estiverem corretos.

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

- `npm start`: Inicia o servidor em modo de produção.

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com Nodemon.

- `npm test`: Executa os testes da aplicação. (Não implementado ainda)
