const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const AccountTriggerComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/accountTrigger.js'
    );

    AccountTriggerComponent.addImport(
        "import { useHistory } from 'react-router-dom';"
    );

    AccountTriggerComponent.insertAfterSource(
        ' const { formatMessage } = useIntl();',
        `const history = useHistory();
        const redirectToAccountHandler = () =>{history.push("/account")}`
    );

    AccountTriggerComponent.setJSXProps('button className={classes.trigger}', {
        onClick: '{redirectToAccountHandler}'
    });
};
