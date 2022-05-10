/* eslint-disable */
/**
 * Custom interceptors for the project.
 *
 * This project has a section in its package.json:
 *    "pwa-studio": {
 *        "targets": {
 *            "intercept": "./local-intercept.js"
 *        }
 *    }
 *
 * This instructs Buildpack to invoke this file during the intercept phase,
 * as the very last intercept to run.
 *
 * A project can intercept targets from any of its dependencies. In a project
 * with many customizations, this function would tap those targets and add
 * or modify functionality from its dependencies.
 */

// function localIntercept() {}

// module.exports = localIntercept;

module.exports = targets => {
    const CartTriggerComponent = require('./src/components/CartTrigger/cartTrigger.targetables.js');
    CartTriggerComponent(targets);

    const AccountTriggerComponent = require('./src/components/AccountTrigger/accountTrigger.targetables.js');
    AccountTriggerComponent(targets);

    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            exact: true,
            name: 'Account Dashboard',
            path: require.resolve('./src/components/AccountDashboard'),
            pattern: '/account'
        });
        return routes;
    });
};
