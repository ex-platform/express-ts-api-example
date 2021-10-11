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

## Recommended IDE Setup

- VSCode + [Thunder client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
