# Project Structure Reference

Note: This is only for reference, this template may not strictly use these templates.

## Option 1: layered architecture (small to medium apps)

```
project-root/
├── backend/
│   ├── src/
│   │   ├── config/            # App configuration (env variables, DB config)
│   │   │   ├── db.js
│   │   │   └── index.js
│   │   ├── controllers/       # Route logic handlers
│   │   │   └── userController.js
│   │   ├── models/            # Database models
│   │   │   └── userModel.js
│   │   ├── routes/            # Route definitions
│   │   │   └── userRoutes.js
│   │   ├── middlewares/       # Custom middlewares (auth, error handling)
│   │   │   ├── authMiddleware.js
│   │   │   └── errorHandler.js
│   │   ├── services/          # Business logic, external API calls
│   │   │   └── userService.js
│   │   ├── utils/             # Utilities/helpers
│   │   │   └── logger.js
│   │   ├── app.js             # Express app initialization
│   │   └── server.js          # Starts the server
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/                # Static files (images, favicon, etc.)
│   ├── src/
│   │   ├── components/        # React/Vue/Angular components
│   │   ├── pages/             # Page-level components
│   │   ├── services/          # API calls
│   │   │   └── api.js
│   │   ├── utils/             # Utility functions
│   │   ├── hooks/             # Custom React hooks
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── docker/                    # Dockerfiles and docker-compose
│   ├── backend.Dockerfile
│   ├── frontend.Dockerfile
│   └── docker-compose.yml
│
├── .gitignore
├── README.md
└── package.json               # Optional root package.json for monorepo scripts
```

## Option 2: feature-first approach (large apps)

```
project-root/
├── backend/
│   ├── src/
│   │   ├── config/           # Environment and database configs
│   │   ├── modules/          # Feature-based modules
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.js
│   │   │   │   ├── auth.service.js
│   │   │   │   ├── auth.routes.js
│   │   │   │   └── auth.model.js
│   │   │   ├── users/
│   │   │   │   ├── users.controller.js
│   │   │   │   ├── users.service.js
│   │   │   │   ├── users.routes.js
│   │   │   │   └── users.model.js
│   │   │   └── products/
│   │   │       └── ...      # Same pattern
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── modules/          # Mirror backend feature modules
│   │   │   ├── auth/
│   │   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   └── api.js
│   │   │   ├── users/
│   │   │   └── products/
│   │   ├── common/           # Shared components/utilities
│   │   └── App.js
│   └── package.json
└── README.md
```