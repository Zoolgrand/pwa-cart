import React from 'react';
import AccountNavItem from './accountNavItem';
import { useAccountDashboard } from './useAccountDashboard';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './accountDashboard.module.css';

const AccountDashboard = props => {
    const classes = useStyle(defaultClasses, props.classes);

    const talonProps = useAccountDashboard();
    const {
        navElementsList,
        setPageToRender,
        pageToRender,
        accountDashboardContent
    } = talonProps;

    const needHelp = (
        <div className={classes.needHelp}>
            <p className={classes.needHelpHeading}>You need help?</p>
            <p>Track order status</p>
            <p>My payment option</p>
            <p>Returns, Refunds, & Cancellations</p>
            <p>Delivery Time</p>
            <p>Contact Us</p>
        </div>
    );

    return (
        <div className={classes.accountDashboard}>
            <aside className={classes.asideNav}>
                {navElementsList.map(item => (
                    <AccountNavItem
                        title={item.title}
                        name={item.name}
                        pageToRender={pageToRender}
                        setPageToRender={setPageToRender}
                        key={item.name}
                        icon={item.icon}
                    />
                ))}
                {needHelp}
            </aside>
            <div className={classes.mainBlock}>{accountDashboardContent}</div>
        </div>
    );
};
export default AccountDashboard;
