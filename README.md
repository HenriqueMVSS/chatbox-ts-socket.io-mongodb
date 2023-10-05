
---

# Chatbox - Aplicação de Chat com Socket.io e mongodb

Bem-vindo ao Chatbox, uma aplicação de chat em tempo real desenvolvida com Typescript, Socket.IO e MongoDB!

## Pré-requisitos

Certifique-se de ter o Node.js e o MongoDB instalados no seu sistema.

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Instalação

1. Clone este repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/HenriqueMVSS/chatbox-ts-socket.io-mongodb
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd chatbox-ts-socket.io-mongodb
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

## Configuração do MongoDB

1. Inicie o serviço MongoDB no seu sistema.

2. ```Crie um banco de dados com o nome chatdb para a aplicação.```

3. Substitua a URL do MongoDB no arquivo `server.ts` pelo URL correspondente ao seu banco de dados e usuário:

    ```typescript
    mongoose.connect('mongodb://localhost:27017/chatdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    ```

## Execução

1. Inicie o servidor:

    ```bash
    npm start
    ```

2. Abra o navegador e acesse [http://localhost:3002](http://localhost:3002).

3. Insira um nome de usuário na página inicial e pressione Enter.

4. Comece a conversar!

## Funcionalidades

- **Conexão em Tempo Real:** A aplicação utiliza Socket.IO para permitir a comunicação em tempo real entre os usuários.
  
- **Persistência de Mensagens:** As mensagens são armazenadas no MongoDB para persistência.

---
