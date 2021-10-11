# express-ts-api-example

REST API using Express, TypeScript, TypeORM.

![Desktop img](./desktop.jpg)

## Initial setup

```bash
# install
yarn

# create .env file
touch .env

# start mariadb
docker-compose up -d

# drop schema
yarn run typeorm schema:drop

# sync schema
yarn typeorm migration:run

# show migration
yarn run typeorm migration:show

# start dev server
yarn run dev
```

## Migration

```bash
# create migration
yarn typeorm migration:generate -n <MIGRATION_NAME>

# show migration
yarn run typeorm migration:show
```

If in mono-repo, you need to change script in `package.json` and use `src/app/typeorm.ts`

```json
{
  "script": {
    // from
    "typeorm": "ts-node ./node_modules/typeorm/cli.js",
    // to
    "typeorm": "ts-node ../../node_modules/typeorm/cli.js",
  }
}
```

## Middleware

- express-session: Simple session middleware maintained by the Expressjs team.
- helmet: Secure app by setting various HTTP headers.
- morgan: HTTP request logger maintained by the Expressjs team.
- passport: Authentication middleware for Node.js.


## Recommended IDE Setup

- VSCode + [Thunder client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
