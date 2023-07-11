import React from 'react';
import UserDetails from "./UserDetails/UserDetails";
import UserAddress from "./UserAddress/UserAddress";
import Company from "./Company/Company";
import styles from './User.module.css';

const User = ({user}) => {
    return (
        <div className={styles.user}>
            <h2 className={styles.userName}>{user.name} "{user.username}"</h2>
            <UserDetails user={user} />
            <UserAddress address={user.address} />
            <Company company={user.company} />
        </div>
    );
};

export default User;