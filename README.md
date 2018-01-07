# Ella API

Ella is a [universal JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) application development framework.

Ella has two subprojects:

1. [Ella Framework](https://github.com/Vandivier/ella-framework) is an opinionated [Angular Universal](https://universal.angular.io/) implementation. As such, it includes UI code and a rendering server.
2. [Ella API](https://github.com/Vandivier/ella-api) is an opinionated [Loopback](https://loopback.io/) API server.

### Starting the Project

1. install MySQL Server 5.7***
    1. During install, ensure you have created user test with pass test and DB Admin permission.
2. `CREATE DATABASE test`
    1. The ORM layer updates DB, but it must already exist.
    2. Optionally verify with `SHOW DATABASES`.
    3. Probably you want to change DB name for production. Maybe `CREATE DATABASE ellacms`?
    4. You can also verify your tables with `USE test` then `SHOW TABLES`
3. `npm install`
4. `npm start`
5. visit localhost:3000/explorer

*** Developed w 5.7.20x86, but may work with other versions. The application works out-of-the-box with MySQL, but with trivial modification the project will support other SQL DBs and even NoSQL DBs.

### Additional Setup for Development

1. Globally install [Loopback 3 CLI](https://github.com/strongloop/loopback-cli): `npm install -g loopback-cli`

### Architecty Things

1. The API server and the Angular Universal server are distinct. So there are three entry points in the code:
    1. API server entry point at /src/server.js
    1. Angular Universal server entry point at /src/main.ts
    1. Angular Universal UI entry point at /src/client/app.module.ts

### Other Stuff

1. conventions
    1. global webpack not recommended https://webpack.js.org/guides/installation/#global-installation
    1. main user model is called EllaUser because User is reserved by LoopBack itself
2. DB stuff
    1. https://dev.mysql.com/downloads/windows/installer/5.7.html
    1. mysql-installer-web-community-5.7.20.0.msi
    1. localhost db server tcp/ip at port 3306, config type dev machine, test user pass: test
    1. test user, DB admin, host %, pass: test
    1. run as windows service, name MYSQL57
    1. X Protocol / doc store disabled
    1. C:\Program Files (x86)\MySQL\MySQL Server 5.7
3. orchestration, ORM, API generation
    1. https://www.slant.co/improve/topics/11235/~javascript-orms
    1. https://loopback.io/doc/en/lb3/Defining-data-sources.html
    1. https://github.com/odino/the-conductor
4. swagger
    1. https://swagger.io/swagger-editor/
5. Skin explorer
    1. https://github.com/strongloop/loopback-component-explorer#advanced-usage
6. TODO
    1. Seperate documentation repo which includes documentation for API and Framework side, in an extendable way so projects can include their own docs as well.
    2. CSV-to-object (array), then create many using https://stackoverflow.com/questions/45860853/how-to-insert-multiple-records-in-loopback
    3. Generate ERD and swagger file dynamically
7. Remove authentication on a single endpoint: https://loopback.io/doc/en/lb2/Authentication-authorization-and-permissions.html#exposing-and-hiding-models-methods-and-endpoints
