const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const OrderHistoryPageComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/OrderHistoryPage/orderHistoryPage.js'
    );

    OrderHistoryPageComponent.addImport(
        "import AccountLayout from '../../../../../../src/components/AccountLayout';"
    );

    OrderHistoryPageComponent.surroundJSX(
        'div className={classes.root}',
        '<AccountLayout />'
    );
};
