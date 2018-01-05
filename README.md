# Ella API

Ella is a [universal JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) application development framework.

Ella has two subprojects:
1. [Ella Framework](https://github.com/Vandivier/ella-framework) is an opinionated Angular Universal (v5.x+) implementation. As such, it includes UI code and a rendering server.
1. [Ella API](https://github.com/Vandivier/ella-api) is an opinionated Loopback 3 API server.

### Starting the Project
1. install MySQL Server 5.7*
1. `CREATE DATABASE ellacms`. TypeORM updates DB, but it must already exist. Optionally verify with `SHOW DATABASES`.
1. `npm install`
1. Not Windows: `npm start`
    1. Windows: open two processes/command lines. In one, `npm run-script start-express`. In the other, `npm run-script start-ng`.
1. visit localhost:3200

* Developed w 5.7.20x86, but may work with other versions. The application works out-of-the-box with MySQL, but with trivial modification the project will support other SQL DBs and even NoSQL DBs. The limitting factor is TypeORM.

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
    1. main user model is called ella-user because User is reserved by LoopBack itself
1. DB stuff
    1. https://dev.mysql.com/downloads/windows/installer/5.7.html
    1. mysql-installer-web-community-5.7.20.0.msi
    1. localhost db server tcp/ip at port 3306, config type dev machine, root pass: password
    1. test user, DB admin, host %, pass: test
    1. run as windows service, name MYSQL57
    1. X Protocol / doc store disabled
    1. C:\Program Files (x86)\MySQL\MySQL Server 5.7
1. orchestration, ORM, API generation
    1. https://www.slant.co/improve/topics/11235/~javascript-orms
    1. https://loopback.io/doc/en/lb3/Defining-data-sources.html
    1. https://github.com/odino/the-conductor
1. swagger
    1. https://swagger.io/swagger-editor/

