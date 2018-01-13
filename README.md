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
    2. main user model is called EllaUser because User is reserved by LoopBack itself
    3. entity property names are camelcase.
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
8. /ella-api/server/models maps to /ella-framework/src/mock for test data

### Hungarian Reference
1.  s: string
2.  o: object
3.  i: Number (long, int, double, etc)
4.  b: boolean
5.  p: Promise
6.  obs: Observable
7.  f: function
8.  v: variant
9.  m: module
10. TitleCase: module or service
11. ALLCAPS: constant, module, or service
12. $: a DOM or DOM-like object, such as a jQuery or Angular object
13. arr: an array
14. el: a DOM object, specifically excluding it as not a DOM-like object.
    1. eg `$div = $('div'); elDiv = $div[0];`
15. _: locally scoped
    1. Generally only needed if there is some similarly-named, non-local variable.
    2. eg to distinguish sWord = function() { return _sWord; }
16. Hungarian identifiers can be stacked, and precedence matters.
    1. For example, fpsWord(); should be a function which returns a promise resolving to a string.
    2. When and only when a hungarian identifier is variant, keep in mind the indicator may have two different meanings:
        1. vso is a variant which may be a string or an object
        2. vso is a variant which may be a string that represents an object (eg, it can be parsed with JSON.parse)
17. Stacked hungarian remains in downcase. An upcase indicates the end of the Hungarian identifier.
    1. It's fpsWord(), not fPSWord()
18. Arbitrary hungarian types can be indicated by downcasing.
    1. mycustomtype is fine, as long as it is a real custom type or class.
19. Long names are not always needed, but sometimes they are.
    1. A long name is a hungarian identifier + arbitrary descriptive TitleCase naming
    2. A middle-sized name is a a hungarian identifier + arbitrary undescriptive and/or downcase letters
    3. Avoid middle-sized names. The hungarian indication is incorrect and the text isn't helpful.
    4. Short names are preferred when a method is so generic that contextual information doesn't exist. Like a utility.
    5. Short names suffice when there are no other variables of a given type in context.
    6. Short names do not suffice when multiple variables of the same type are in the same context.
    7. Examples:
        1. Short: o, s, i, obs
        2. Middle-sized: ob, obj, str, int, objold, objnw
        3. Long: oPreviousValue, oNewValue, sLetter, sWord, fsHtmlContent
20. Respect third party conventions
    1. Hungarian is for your codebase, not for theirs (unless they use it)
    2. Use their syntax and conventional var names.
    3. Just make a comment referencing where their convention came from.
    4. For example, use `const fs = require('fs')`
