import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './accountLayout.module.css';
import {
    faUser,
    faMessage,
    faAddressBook,
    faHeart,
    faMoneyBill1,
    faCalendarAlt
} from '@fortawesome/free-regular-svg-icons';
import AccountLayoutNavItem from './accountLayourNavItem';

const AccountLayout = props => {
    const classes = useStyle(defaultClasses, props.classes);

    const navElementsList = [
        {
            title: 'Order History',
            icon: faCalendarAlt,
            route: '/order-history'
        },
        {
            title: 'Favorites List',
            icon: faHeart,
            route: '/wishlist'
        },
        {
            title: 'Address Book',
            icon: faAddressBook,
            route: '/address-book'
        },
        {
            title: 'Saved Payments',
            icon: faMoneyBill1,
            route: '/saved-payments'
        },
        {
            title: 'Communications',
            icon: faMessage,
            route: '/communications'
        },
        {
            title: 'Account Information',
            icon: faUser,
            route: '/account-information'
        }
    ];

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
        <div className={classes.accountLayout}>
            <aside className={classes.navigation}>
                {navElementsList.map(item => (
                    <AccountLayoutNavItem
                        title={item.title}
                        icon={item.icon}
                        route={item.route}
                    />
                ))}
                {needHelp}
            </aside>
            <div>{props.children} </div>
        </div>
    );
};

export default AccountLayout;
