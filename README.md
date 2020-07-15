# Framify Backend

## Setup

### Requirements

These are some of the software required to run this application:

- Nodejs `(>= 10.x.x)`
- Yarn `(>= 1.x.x)`

### Installation

These are the steps to get the app up and running

- Install Dependencies

  ```sh
  yarn install
  ```

- Run Migrations

  ```sh
  yarn migrations:run
  ```

- Run the application:

  ```sh
  yarn start:dev
  ```

## Deploy

### Requirements

These are some of the software required to **build** and run this application in production:

- Nodejs `(>= 10.x.x)`
- Yarn `(>= 1.x.x)`

### Steps

- Install Dependencies

  ```sh
  yarn install
  ```

- Build the application:

  ```sh
  yarn build
  ```

- Run the application:

  ```sh
  yarn start
  ```

- Checkout `package.json` for other helpful scripts.
- pm2
