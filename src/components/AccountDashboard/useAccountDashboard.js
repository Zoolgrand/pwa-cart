import React, { useState } from 'react';
import {
    faUser,
    faMessage,
    faAddressBook,
    faHeart,
    faMoneyBill1,
    faCalendarAlt
} from '@fortawesome/free-regular-svg-icons';

import AccountInformationPage from '@magento/venia-ui/lib/components/AccountInformationPage';
import OrderHistoryPage from '@magento/venia-ui/lib/components/OrderHistoryPage';
import WishlistPage from '@magento/venia-ui/lib/components/WishlistPage';
import AddressBookPage from '@magento/venia-ui/lib/components/AddressBookPage';
import SavedPaymentsPage from '@magento/venia-ui/lib/components/SavedPaymentsPage';
import CommunicationsPage from '@magento/venia-ui/lib/components/CommunicationsPage';

export const useAccountDashboard = () => {
    const [pageToRender, setPageToRender] = useState('order_history');

    const navElementsList = [
        {
            title: 'Order History',
            name: 'order_history',
            icon: faCalendarAlt
        },
        {
            title: 'Favorites List',
            name: 'favorites_list',
            icon: faHeart
        },
        {
            title: 'Address Book',
            name: 'address_book',
            icon: faAddressBook
        },
        {
            title: 'Saved Payments',
            name: 'saved_payments',
            icon: faMoneyBill1
        },
        {
            title: 'Communications',
            name: 'communications',
            icon: faMessage
        },
        {
            title: 'Account Information',
            name: 'account_information',
            icon: faUser
        }
    ];

    const components = {
        order_history: <OrderHistoryPage />,
        favorites_list: <WishlistPage />,
        address_book: <AddressBookPage />,
        saved_payments: <SavedPaymentsPage />,
        communications: <CommunicationsPage />,
        account_information: <AccountInformationPage />
    };
    const accountDashboardContent = components[pageToRender];

    return {
        navElementsList,
        pageToRender,
        setPageToRender,
        accountDashboardContent
    };
};
