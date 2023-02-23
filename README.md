# REST-API-Design

# Architecutre:

### Request -> Router -> Controller -> Service Layer -> Data Access Layer

### Reponse -> Data Access Layer -> Service Layer -> Controller -> Router

### Controller: Handling everything related to HTTP. We deal with requests and responses for our endpoints.

Above that layer is also a little Router from Express that passes request to the corresponding controller.

### Service Layer: Handling business logic. Exports certain services (methods) which are used by the controller.

### Data Access Layer: Working with our DB. To start with we will work with local JSON file.

## Initiate all dependencies:

in project folder:
npm init -y

npm i -D nodemon

npm i express

touch .gitignore and add node_modules/ inside it.

inside package.json:
under scripts, add:
"dev": "nodemon src/index.js"

Start project through: npm run dev
