const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const AddressBookPageComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/AddressBookPage/addressBookPage.js'
    );

    AddressBookPageComponent.addImport(
        "import AccountLayout from '../../../../../../src/components/AccountLayout';"
    );

    AddressBookPageComponent.surroundJSX(
        'div className={classes.root}',
        '<AccountLayout />'
    );
};
