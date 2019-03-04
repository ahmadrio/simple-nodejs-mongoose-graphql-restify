# Simple Apps with NodeJS-GraphQL

Contoh simpel pembuatan aplikasi berbasis NodeJS dengan GraphQL-Mongoose-Restify. Semoga bermanfaat buat teman2.

## Packages:
- dotenv
- nodemon
- restify
- mongoose
- graphql
- graphql-date
- apollo-server-restify
- bcryptjs
- jsonwebtoken

## Dev Depedencies:
- babel-cli
- babel-core
- babel-preset-env
- babel-preset-stage-2
- babel-register

## Usage

### Install packages:
```
npm install
```

### Create new file .env
```
APP_NAME="Simple NodeJS with GraphQL"
APP_PORT=3000
APP_BASE_URL=http://192.168.10.10:3000

DB_CONNECTION=mongodb
DB_PORT=27017
DB_IP=127.0.0.1
DB_NAME=graphql-shop
DB_USER=homestead
DB_PASS=secret
MONGO_OPTIONS="?authSource=admin"

JWT_SECRET="&@$!opanegro!$@&"
```

### Run Server
```
npm start
```

## Terima kasih kpd:
- [Muhammad Harits Syaifulloh](https://github.com/askmhs)