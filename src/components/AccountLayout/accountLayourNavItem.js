import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultClasses from './accountLayourNavItem.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { useHistory, useLocation } from 'react-router-dom';

const AccountLayoutNavItem = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const { title, icon, route } = props;

    const history = useHistory();
    const location = useLocation();

    const isActive = location.pathname === route;

    const rootClass = isActive ? classes.navItem_active : classes.navItem;

    const changeRoureHandler = () => {
        history.push(route);
    };

    return (
        <div className={rootClass} onClick={changeRoureHandler}>
            <FontAwesomeIcon icon={icon} size="lg" />
            <h2>{title}</h2>
        </div>
    );
};
export default AccountLayoutNavItem;
