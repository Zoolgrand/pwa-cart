const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const CartTriggerComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/cartTrigger.js'
    );

    CartTriggerComponent.addImport("import { useHistory } from 'react-router-dom';")

    CartTriggerComponent.insertAfterSource(
        'classes.triggerContainer;',
        `const history = useHistory();
        const redirectToCartHandler = () =>{history.push("/cart")}`
    );
    
    CartTriggerComponent.setJSXProps('button className={classes.trigger}', {
        onClick: '{redirectToCartHandler}'
    });
};
