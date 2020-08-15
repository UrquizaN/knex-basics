# KnexJS

<p align="center">
 <a href="#fonte">Fonte</a> • 
 <a href="#instalação">Instalação</a>
</p>

### O Knex é um Query Builder - Construtor de queries SQL com Javascript

- Multiplas plataformas (PostgreSQL, MySQL, SQLite3...)

```sql
// Kex
knex('users').where('id', 1)

// SQL
SELECT * FROM 'users' WHERE 'id' = 1

```

- Instalando o Express, Postgres e Knex

    `$ yarn add knex express pg`

- Criar o knex file

    `$ npx knex init`

- Alterar as configurações do knexfile.js

    ```jsx
    development: {
        client: 'pg',
        connection: {
          database: "NOME_DO_DB",
          user: "NOME_DO_USUARIO",
          password: "SENHA"
        }
     },
    ```

- Criando migration: `npx knex migrate:make NOME_DA_MIGRATION`

    💡 Se mudar o diretório da **migration**, deverá configurar no knexfile.js

    ```jsx
    migrations: {
    	directory: `${__dirname} RESTO_DO_DIRETÓRIO`
    }
    ```

    Na função **up** tem todas as modificações da tabela e na **down** o rollback

    ```sql
    // Exemplo de migration de criação da tabela 'users'
    // com 4 campos - id, username, created_at e updated_at
    exports.up = function(knex) {
      return knex.schema.createTable('users', function(table){
          table.increments('id')
          table.text('username').unique().notNullable()

          table.timestamp('created_at').defaultTo(knex.fn.now())
          table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
    };

    exports.down = function(knex) {
      return knex.schema.dropTable('users')
    };
    ```

    - Rodar a migration: `$ npx knex migrate:latest`
    - Para fazer o rollback: `$ npx knex migrate:down`

- Criando seeds - alimentar a tabela

    `$ npx knex seed:make NOME_DO_SEED`

    💡 Se mudar o diretório do seed, deverá configurar no knexfile.js

    ```jsx
    seeds: {
          directory: `${__dirname} RESTO_DO_DIRETORIO`
    }
    ```

    - Rodando o seed: `$ npx knex seed:run`

### Fonte

[http://knexjs.org/](http://knexjs.org/)

## Instalação

#### Pré-requisitos para execultar este projeto
Você precisa ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) 
- [PostegreSQL](https://www.postgresql.org/)
- [Insomnia](https://insomnia.rest/download/)

### 🎲 Instalando e rodando

```bash
# Clone este repositório
$ git clone <https://github.com/UrquizaN/knex-basics>

# Acesse a pasta do projeto no terminal/cmd
$ cd knex-basics

# Instale as dependências
$ npm install
ou
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ npm start
ou
$ yarn start

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
### 💡 Utilize o Insomnia para acessar as rotas do CRUD

### Projeto criado a partir do tutorial feito por [Mayk Brito](https://github.com/maykbrito) no [YouTube](https://www.youtube.com/watch?v=U7GjS3FuSkA&t=4956s)

<h3 align="center">
💻 Desenvolvido por: 
<a href="https://www.linkedin.com/in/urquiza-n%C3%B3brega-b999a1105/">Urquiza Nóbrega</a>
</h3>
