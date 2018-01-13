/**
 * fix-schema.js
 *
 * description:
 * This module initializes (auto-migrate) the database if it doesn't exist
 * and updates (auto-update) the schema as needed if it does exist.
 *
 * note: By default, LoopBack executes boot scripts sequentially in alphabetical order.
 * 
 * ref: https://loopback.io/doc/en/lb2/Defining-boot-scripts.html#overview
 * ref: https://loopback.io/doc/en/lb3/Defining-boot-scripts.html#boot-script-loading-order
 *
 * TODO: let or const, don't var, if possible
 * TODO: promisify and utilize await
 * 
 **/

const oInitData = require('./db-init-data');

// ref: https://loopback.io/doc/en/lb3/Defining-boot-scripts.html#bootstrap-function-arguments
module.exports = async function(app) {
    const EllaUser = app.models.EllaUser;
    const Item = app.models.Item;
    const oEllaDB = app.dataSources.EllaDB;
    const Role = app.models.Role;

    delete app.models.User.validations.email; // re: https://github.com/strongloop/loopback/issues/1137#issuecomment-96722470
    delete app.models.EllaUser.validations.email; // re: https://github.com/strongloop/loopback/issues/1137#issuecomment-96722470

    await oEllaDB.automigrate(['User', 'Application', 'Role', 'RoleMapping', 'AccessToken']); // ref: https://github.com/strongloop/loopback/issues/591
    console.log('automigration done, system');
    await oEllaDB.automigrate('EllaUser');
    console.log('automigration done, EllaUser');
    await oEllaDB.automigrate('Item');
    console.log('automigration done, Item');
    await Item.create(oInitData.arroItems);
    console.log('creation done, Item');

    await EllaUser.create(oInitData.arrUsers);
    console.log('creation done, EllaUser');

    await Role.create(oInitData.arroRoles); // ref: https://github.com/strongloop/loopback-example-access-control/blob/master/server/boot/sample-models.js
    await Role.findOne({where: {name: 'admin'}}, function(err, result){
        result.principals.create(oInitData.arroAdminMappings);
    });
    await Role.findOne({where: {name: 'liason'}}, function(err, result){
        result.principals.create(oInitData.arroLiasonMappings);
    });
    console.log('creation done, roles');

    return Promise.resolve();
};
