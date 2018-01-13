/**
 *  boot.js
 *  
 *  This boot-lib pattern gives more transparent flow control compared to
 *  LoopBack's built-in pattern
 *
 *  The underlying app is basically the express app
 **/

'use strict';

const Logger = require('../.././services/serviceLogger');
const mfpAutoMigrate = require('../boot-libs/automigrate');
const mfpAutoUpdate = require('../boot-libs/autoupdate');
const mfRoleResolver = require('../boot-libs/role-resolver');
const mfRouter = require('../boot-libs/router');

module.exports = async function (app, cb) {
    try {
        //app.enableAuth(); // TODO: uncomment and implement in service-url-manager
        mfRoleResolver(app);
        await mfpAutoMigrate(app); // TODO: eventually, if ellauser table doesn't exist will be our first install check
        await mfpAutoUpdate(app);
        mfRouter(app);
    } catch (e) {
        Logger.logError('boot.js error', e);
    }

    Logger.logInfo('boot.js done');
};
