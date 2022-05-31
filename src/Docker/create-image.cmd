docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gorvodokanal/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t gorvodokanal/app ../..
