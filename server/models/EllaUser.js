'use strict';

module.exports = function (Ellauser) {
    Ellauser.observe('before save', function filterProperties(ctx, next) {
        /**
         *  make email optional
         *  ref: https://stackoverflow.com/questions/36276212/create-new-user-on-strongloop-without-inputting-email
         *  ref: https://github.com/strongloop/loopback/issues/2125#issuecomment-198086184
         *  ref: https://loopback.io/doc/en/lb3/Operation-hooks.html#operation-hook-context-object
         **/

        let oInstance = ctx.instance;

        if (oInstance) oInstance.email = oInstance.email || 'placeholder@example.com';

        next();
    });
};