# Frontend Application

Este é o repositório para a aplicação frontend desenvolvida com Next.js.

## Tecnologias Utilizadas

- **Next.js**: Next.js é um framework de React que oferece renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e uma experiência de desenvolvimento intuitiva. Ele foi escolhido por:
  - Facilitar a construção de aplicativos React com SSR e SSG.
  - Fornecer um roteamento simplificado e otimizado para aplicativos de página única (SPAs).
  - Oferecer uma experiência de desenvolvimento eficiente com recursos como hot reloading.
- **React**: React é uma biblioteca JavaScript para criar interfaces de usuário. É amplamente utilizado e oferece uma maneira eficiente e declarativa de construir componentes reutilizáveis para interfaces de usuário.
- **Axios**: Axios é um cliente HTTP baseado em promessas para fazer requisições HTTP tanto do navegador quanto do Node.js. Ele é usado neste projeto para fazer requisições AJAX para o servidor backend ou outras APIs.

- **Formik**: Formik é uma biblioteca para lidar com formulários em React. Ele simplifica a criação e validação de formulários complexos, gerenciando estados e lidando com eventos.

- **Yup**: Yup é uma biblioteca de validação de esquema para JavaScript. Ela é usada em conjunto com o Formik para validar os dados dos formulários no lado do cliente de forma simples e expressiva.

- **Tailwind CSS**: Tailwind CSS é um framework de utilitários CSS que permite criar designs personalizados com facilidade, fornecendo classes utilitárias pré-definidas. Ele foi escolhido por sua abordagem de desenvolvimento centrada em componentes e sua flexibilidade para estilizar a interface do usuário de forma consistente.

- **PostCSS e Autoprefixer**: PostCSS é uma ferramenta para transformar CSS com plugins JavaScript. Autoprefixer é um plugin do PostCSS que adiciona automaticamente prefixos de vendedor aos estilos CSS, garantindo compatibilidade com navegadores antigos.

- **ESLint e Prettier**: ESLint é uma ferramenta de linting para JavaScript que identifica e reporta padrões problemáticos no código. Prettier é uma ferramenta de formatação de código que ajuda a manter um estilo de código consistente. Ambas são usadas para garantir a qualidade e consistência do código fonte.

- **TypeScript**: TypeScript é um superconjunto tipado de JavaScript que compila para JavaScript puro. Ele oferece verificação de tipo estática durante o desenvolvimento, o que ajuda a evitar erros comuns e melhora a manutenibilidade do código.

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

### `npm run dev`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

### `npm run build`

Compila a aplicação para produção na pasta `.next`.\
Ele otimiza a construção para obter o melhor desempenho.

### `npm start`

Inicia o servidor de produção.\
A aplicação estará disponível no modo de produção.

### `npm run lint`

Executa o ESLint para verificar e corrigir problemas no código JavaScript/TypeScript.

### `npm run lint:css`

Executa o Stylelint para verificar e corrigir problemas no código CSS.
