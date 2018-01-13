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

module.exports = async function(app) {
    // TODO: update version # and any table updates since last breaking release
    console.log('autoupdate ran');
    return Promise.resolve();
};
