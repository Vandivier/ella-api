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
 * TODO: promisify and utilize await
 * 
 **/

module.exports = async function (app) {
    const oEllaDB = app.dataSources.EllaDB;
    const Item = app.models.Item;
    const EllaUser = app.models.EllaUser;

    const oEllaUserJohn = { // for testing/developing only. remove before production.
        'password': '1234', // #amyschumerbelike
        'role-name': 'developer', // TODO: autogenerate
        'username': 'john'
    }

    EllaUser.create(oEllaUserJohn);
    
    oEllaDB.automigrate(['User', 'Application', 'Role', 'ACL', 'RoleMapping', 'AccessToken'], function(){}); // ref: https://github.com/strongloop/loopback/issues/591

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