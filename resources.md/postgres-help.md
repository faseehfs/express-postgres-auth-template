# Postgres help

This is primarily based on the Ubuntu OS.

## Entering the PostgreSQL shell

```
sudo -i -u postgres
psql
```

## Commonly used commands

### Navigation & Viewing

- List databases: `\l`
- Connect to a database: `\c db_name`
- List tables in current database: `\dt`
- Show current database: `\conninfo`
- List users/roles: `\du`
- Quit `psql`: `\q`

### Basic User/Role & Database Management (Essentials)

- Create a login user: `CREATE ROLE username WITH LOGIN PASSWORD 'password';`
- Change password: `ALTER ROLE username WITH PASSWORD 'newpassword';`
- Create a database owned by a user: `CREATE DATABASE db_name OWNER username;`
- Grant all privileges on a database: `GRANT ALL PRIVILEGES ON DATABASE db_name TO username;`

### Exiting

- Quit `psql`: `\q`