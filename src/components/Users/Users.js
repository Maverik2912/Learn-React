import React from 'react';
import User from "./User/User";

const Users = ({users}) => {
    const allUsers = users?.map(user => <User key={user.id} user={user} />);

    return (
        <>
            {allUsers}
        </>
    );
};

export default Users;