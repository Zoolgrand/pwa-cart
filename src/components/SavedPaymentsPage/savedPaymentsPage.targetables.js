const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const SavedPaymentsPageComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/SavedPaymentsPage/savedPaymentsPage.js'
    );

    SavedPaymentsPageComponent.addImport(
        "import AccountLayout from '../../../../../../src/components/AccountLayout';"
    );

    SavedPaymentsPageComponent.surroundJSX(
        'div className={classes.root}',
        '<AccountLayout />'
    );
};
