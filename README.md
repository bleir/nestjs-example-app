# NestJS Example App

## Description

A simple REST API built with [NestJS](https://github.com/nestjs/nest) framework that provides endpoints for managing and retrieving:

- **Users** - User account information and management
- **Tweets** - Tweet creation and retrieval
- **Profiles** - User profile data
- **Hashtags** - Hashtag management and search

This is an example application demonstrating NestJS best practices with modular architecture, DTOs, and service-based design patterns.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## API Endpoints

The API provides the following main endpoints:

- **Users** - `/users`
  - `GET /users` - Get all users
  - `POST /users` - Create a new user
  
- **Tweets** - `/tweet`
  - `GET /tweet` - Get all tweets
  - `POST /tweet` - Create a new tweet
  
- **Profiles** - `/profile`
  - `GET /profile` - Get all profiles
  - `POST /profile` - Create a new profile
  
- **Hashtags** - `/hashtag`
  - `GET /hashtag` - Get all hashtags
  - `POST /hashtag` - Create a new hashtag

- **Authentication** - `/auth`
  - Authentication endpoints for user management
