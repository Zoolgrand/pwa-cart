import React, { useState } from 'react';
import {
    faUser,
    faMessage,
    faAddressBook,
    faHeart,
    faMoneyBill1,
    faCalendarAlt
} from '@fortawesome/free-regular-svg-icons';

const AccountInformationPage = React.lazy(() =>
    import('@magento/venia-ui/lib/components/AccountInformationPage')
);
const OrderHistoryPage = React.lazy(() =>
    import('@magento/venia-ui/lib/components/OrderHistoryPage')
);
const WishlistPage = React.lazy(() =>
    import('@magento/venia-ui/lib/components/WishlistPage')
);
const AddressBookPage = React.lazy(() =>
    import('@magento/venia-ui/lib/components/AddressBookPage')
);
const SavedPaymentsPage = React.lazy(() =>
    import('@magento/venia-ui/lib/components/SavedPaymentsPage')
);
const CommunicationsPage = React.lazy(() =>
    import('@magento/venia-ui/lib/components/CommunicationsPage')
);

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
