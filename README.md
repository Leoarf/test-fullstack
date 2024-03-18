# Full Stack Application

Este é um projeto full stack dividido em duas partes: o **backend** e o **frontend**. Antes de rodar o projeto, siga as instruções abaixo para configurar e instalar as dependências necessárias.

## Rodando o Projeto

### Backend

Para rodar o backend, siga estas etapas:

1. **Instalação de Dependências:** Na raiz do projeto, navegue até a pasta `backend` executando o seguinte comando:

```bash
cd backend
npm install
```

Configuração do Banco de Dados: Por padrão, o banco de dados roda na porta 4000. Você pode alterar isso no arquivo .env dentro da raiz do projeto backend. Caso altere, lembre-se de atualizar a URL correspondente no arquivo .env.local na raiz do projeto frontend.

Arquivos de Configuração: Dentro da raiz do projeto backend, você encontrará um arquivo .env.example que mostra como configurar as variáveis de ambiente. Certifique-se de criar um arquivo .env com as configurações apropriadas.

Para mais especificações sobre o backend, consulte o README dentro da pasta backend.

### Frontend

Para rodar o frontend, siga estas etapas:

2 **Instalação de Dependências:** Na raiz do projeto, navegue até a pasta `frontend` executando o seguinte comando:

```bash
cd frontend
npm install
```

Arquivos de Configuração: Dentro da raiz do projeto frontend, você encontrará um arquivo .env.local.example que mostra como configurar a URL do backend. Renomeie-o para .env.local e ajuste a URL conforme necessário.

Para mais especificações sobre o frontend, consulte o README dentro da pasta frontend.

Para rodar o projeto, é necessário seguir as etapas para ambos os lados, frontend e backend.
