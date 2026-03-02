# What's in here

## config/

Stores configuration code and settings used by the application, such as database connections, environment variables, or API settings. These files provide shared configuration that other parts of the application import.

## controllers/

Handles HTTP request and response logic. Controllers read request data (req.body, req.params), call services or models, and send responses (res.json, res.status). They act as the bridge between routes and the rest of the application.

## models/

Contains database-related code. Models perform queries such as creating, reading, updating, and deleting data. Each model usually corresponds to a database table and provides functions for interacting with stored data.

## routes/

Contains URL definitions and maps HTTP endpoints to controller functions. Route files define which function runs for a given request (for example POST /login or GET /users). They should stay small and mainly connect endpoints to controllers without containing business logic or database code.

## scripts/

Contains standalone programs that are run manually rather than as part of the server. Examples include database initialization, migrations, or data imports. These scripts usually run once or occasionally instead of on every server start.

## services/

Contains business logic and core application behavior. Services implement the actual operations the application performs, such as authentication, validation, or complex processing. They coordinate models and other utilities but do not deal with HTTP requests directly.
