import React from 'react';
import styles from './CustomLink.module.scss';
import { NavLink } from 'react-router-dom';

function CustomLink({ url, children }) {
    return (
        <NavLink className={styles.link} to={url ? url : '#'}>
            {children}
        </NavLink>
    );
}

export { CustomLink };
