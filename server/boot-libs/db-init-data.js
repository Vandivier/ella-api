/**
 * fix-schema.js
 *
 * description:
 * This module contains data used by db initialization
 * 
 * ref: https://loopback.io/doc/en/lb2/Defining-boot-scripts.html#overview
 *
 * TODO: let or const, don't var, if possible
 * 
 **/

module.exports = {
    'arrUsers': [{
        'password': 'abcd',
        'roleName': 'admin',
        'username': 'admin'
    }, {
        'password': '1234',
        'roleName': 'admin',
        'username': 'dom'
    }, {
        'password': '1123',
        'roleName': 'admin',
        'username': 'john'
    }, {
        'password': '1123',
        'roleName': 'liason',
        'username': 'bubba',
        'publicEmail': 'bubba@test.com',
        'publicName': 'Bubba Watson',
        'publicPhone': 9998675309,
        'title': 'Liason',
        'bio': 'Bubba is a great help and all around good person. He is from New York.'
    }, {
        'password': '1123',
        'roleName': 'liason',
        'username': 'brooks',
        'publicEmail': 'brooks@test.com',
        'publicName': 'Brooks Koepka',
        'publicPhone': 1123581321,
        'title': 'Liason',
        'bio': 'Brooks can keep you up to date with the latest info. He was born in Oklahoma, and has a degree in accounting.'
    }],
    'arroRoles': [{
        'name': 'admin'
    }, {
        'name': 'liason'
    }],
    arroRoleMappings: [{
        'principalType': 'admin',
        'principalId': 1
    },{
        'principalType': 'admin',
        'principalId': 2
    },{
        'principalType': 'admin',
        'principalId': 3
    },{
        'principalType': 'liason',
        'principalId': 4
    }, {
        'principalType': 'liason',
        'principalId': 5
    }],
    arroAdminMappings: [{
        'principalType': 'admin',
        'principalId': 1
    },{
        'principalType': 'admin',
        'principalId': 2
    },{
        'principalType': 'admin',
        'principalId': 3
    }],
    arroLiasonMappings: [{
        'principalType': 'liason',
        'principalId': 4
    }, {
        'principalType': 'liason',
        'principalId': 5
    }],
    'arroItems': [{
        'type' : 'article',
        'title' : 'The curious case of a constitutional database',
        'ellaUserId' : 1,
        'ownerId' : 3,
        'data' : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
        'type' : 'article',
        'title' : 'The Pokemon fever',
        'ellaUserId' : 3,
        'ownerId' : 2,
        'data' : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
        'type' : 'article',
        'title' : 'The ectoplasmic effect of un-efficiency',
        'ellaUserId' : 2,
        'ownerId' : 3,
        'data' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
};
