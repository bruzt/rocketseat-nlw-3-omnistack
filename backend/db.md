# Postgres
```
sudo docker run -d \
    --name postgres-nlw-3-dev \
    -e POSTGRES_USER=dev \
    -e POSTGRES_PASSWORD=123 \
    -e POSTGRES_DB=nlw3 \
    -p 5432:5432 \
    postgres:13.0
```

### typeORM
```
npx typeorm migration:create -n migration-name
```