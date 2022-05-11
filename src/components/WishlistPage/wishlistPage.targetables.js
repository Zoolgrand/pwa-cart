const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const WishlistPageComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/WishlistPage/wishlistPage.js'
    );

    WishlistPageComponent.addImport(
        "import AccountLayout from '../../../../../../src/components/AccountLayout';"
    );

    WishlistPageComponent.surroundJSX(
        'div className={classes.root}',
        '<AccountLayout />'
    );
};
