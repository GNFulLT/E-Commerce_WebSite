# <em>This project is under development</em>
## Getting Started
First, download the dependencies:

```bash
npm install
```

Secondly, create the .env file and fill the necessary fields :

DATABASE_URL="mysql://{username}:{psw}@{host}:{dbPort}/{schemaName}"

ACCESS_TOKEN_SECRET=ForAuth

REFRESH_TOKEN_SECRET=ForAuth

This project uses Prisma as ORM and schemas builded for MySql. So don't forget to setup MySql Server.

Thirdly, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
