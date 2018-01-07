/**
 *  Title:
 *      server.js
 *
 *  Description
 *      This file is the entry point for the API server
 *      Standard file for Express server initialization
 *
 *  TODO: forever
 **/

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const EllaUtils = require('ella-utils');
const logger = require('./services/serviceLogger');

const controllerLogger = require('./controllers/controllerLogger');

var app = express(); // TODO: const or let

app.use(express.static(path.join(__dirname, 'public')));

app.use('/logger', controllerLogger);

logger.logInfo('express server running on port 3200');

setupDatabase();

// TODO: to dedicated service
async function setupDatabase() {
    try {
        //await EllaUtils.fpWait(); // just to allow debugger to catch process; DO NOT CHECK IN UNCOMMENTED
        //debugger
        //logger.logInfo('connection.isConnected:' + connection.isConnected);
    } catch (e) {
        logger.logError('initTypeOrm err', e);
    }
}

module.exports = app;
