# express-ts-api-example

REST API using Express, TypeScript, TypeORM.

![Desktop img](./desktop.jpg)

## Command

```bash
# install
yarn

# start mariadb
docker-compose up

# drop schema
yarn run typeorm schema:drop

# create migration
yarn typeorm migration:generate -n <MIGRATION_NAME>

# sync schema
yarn typeorm migration:run

# show migration
yarn run typeorm migration:show
```

## Recommended IDE Setup

- VSCode + [Thunder client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
