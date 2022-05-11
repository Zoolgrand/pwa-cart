const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const CommunicationsPageComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/CommunicationsPage/communicationsPage.js'
    );

    CommunicationsPageComponent.addImport(
        "import AccountLayout from '../../../../../../src/components/AccountLayout';"
    );

    CommunicationsPageComponent.surroundJSX(
        'div className={classes.root}',
        '<AccountLayout />'
    );
};
