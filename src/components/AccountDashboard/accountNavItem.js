import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultClasses from './accountNavItem.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';

const AccountNavItem = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const { title, icon, name, pageToRender, setPageToRender } = props;

    const isActive = pageToRender === name;

    const rootClass = isActive ? classes.navItem_active : classes.navItem;

    return (
        <div
            className={rootClass}
            onClick={() => {
                setPageToRender(name);
            }}
        >
            <FontAwesomeIcon icon={icon} size='lg' />
            <h2>{title}</h2>
        </div>
    );
};
export default AccountNavItem;
