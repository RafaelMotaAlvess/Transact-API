# Transact API

[![wakatime](https://wakatime.com/badge/user/0cca606b-99f7-4d43-8228-7f249bc17f26/project/018b774b-036e-4abc-9950-28de5d1a6f68.svg)](https://wakatime.com/badge/user/0cca606b-99f7-4d43-8228-7f249bc17f26/project/018b774b-036e-4abc-9950-28de5d1a6f68)

> **Transact API** is a Node Rest API for credit and debit financial transactions.

## Introductions 📖

- [🔎 About](#🔎-About)
- [🔧 Technologies](#🔧-Technologies)
- [✨ How to Run](#✨-How-to-Run)
- [🚩 Endpoints](#🚩-Endpoints)
- [📃 License](#📃-License)

## 🔎 About

The project was conducted for studies on REST APIs, developed in TypeScript, and utilizing technologies like Fastify, which efficiently handles HTTP requests, Knex, which simplifies database interaction, and various other tools that assist in the development process.

- [x] The user should be able to create an transaction.
- [x] The user should be able to obtain an transaction statement.
- [x] The user should be able to list all transactions that have occurred.
- [x] The user should be able to view a single transaction.

## 🔧 Technologies

- <a target="_blank" href="https://www.typescriptlang.org">TypeScript</a>
- <a target="_blank" href="https://fastify.dev">Fastify</a>
- <a target="_blank" href="https://knexjs.org">Knex</a>
- <a target="_blank" href="https://vitest.dev">Vitest</a>
- <a target="_blank" href="https://www.postgresql.org">PostgreSQL</a>
- <a target="_blank" href="https://www.sqlite.org/index.html">SQLite</a>
- <a target="_blank" href="https://zod.dev">Zod</a>
- <a target="_blank" href="https://github.com/ladjs/supertest#readme">Supertest</a>
- <a target="_blank" href="https://tsup.egoist.dev">Tsup</a>

## ✨ How to Run

- ### **Prerequisites**
  - It is **required** to have **Git** installed and configured on your computer.
  - It is **required** to have **NodeJS** installed and configured on your computer.

#### 1. Make a clone of the repository.

```bash
  $ git clone https://github.com/RafaelMotaAlvess/Transact-API.git
```

#### 2. Install the project's dependencies via the terminal.

```bash
$ npm install
```

#### 3. In the project folder, you will find a file named example.env Make a copy of it and rename it to .env

#### 4. In the project folder, you will find a file named example.env. Make a copy of it and rename it to .env

#### 5. (Optional) Add the port you desire by setting the environment variable "port."

```env
   PORT= "Add the port you will use."
```

#### 6. Run the migration

```bash
    npm run knex -- migrate:latest
```

#### 7. Start the server.

```bash
    npm run dev
```

## 🚩 Endpoints

| Method                      | Description                |
| --------------------------- | -------------------------- |
| `POST /transactions`        | Create new transaction     |
| `GET /transactions`         | List all transactions      |
| `GET /transactions/:id`     | Get a specific transaction |
| `GET /transactions/summary` | Get the summary            |

## 📃 License

The project is under the license [MIT license](./LICENSE).
