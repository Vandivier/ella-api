/**
 * fix-schema.js
 *
 * description:
 * This module initializes (auto-migrate) the database if it doesn't exist
 * and updates (auto-update) the schema as needed if it does exist.
 * 
 * ref: https://loopback.io/doc/en/lb2/Defining-boot-scripts.html#overview
 *
 * TODO: let or const, don't var, if possible
 * 
 **/

const isoUtils = require('../../services/serviceIsomorphicUtilities');

module.exports = async function (app) {
    var oEllaDB = app.dataSources.EllaDB;
    var Item = app.models.Item;
    var EllaUser = app.models.EllaUser;

    //await isoUtils.fpWait(); // for debugging
    //debugger

    // first autoupdate the `EllaUser` model to avoid foreign key constraint failure
    oEllaDB.autoupdate('EllaUser', function (err) {
        if (err) throw err;
        console.log('\nAutoupdated table `EllaUser`.');

        oEllaDB.autoupdate('Item', function (err) {
            if (err) throw err;
            console.log('\nAutoupdated table `Item`.');
            // at this point the database table `Item` should have foreign key `userId` or `ellaUserId`
        });
    });
};