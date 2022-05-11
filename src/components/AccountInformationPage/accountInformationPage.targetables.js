const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const AccountInformationPageComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPage.js'
    );

    AccountInformationPageComponent.addImport(
        "import AccountLayout from '../../../../../../src/components/AccountLayout';"
    );

    AccountInformationPageComponent.surroundJSX(
        'div className={classes.root}',
        '<AccountLayout />'
    );
};
