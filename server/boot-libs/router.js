'use strict';

const controllerLogger = require('../.././controllers/controllerLogger');

module.exports = function(server) {
    // Install a `/` route that returns server status
    const controllerLoopBackRouter = server.loopback.Router();
    controllerLoopBackRouter.get('/', server.loopback.status());

    server.use(controllerLoopBackRouter);
    server.use('/logger', controllerLogger);
};
