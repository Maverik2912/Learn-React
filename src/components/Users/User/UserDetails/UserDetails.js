import React from 'react';

const UserDetails = ({user}) => {
    const {id,name,username,email,phone,website} = user;

    return (
        <div>
           <h3>User Details</h3>
           <ul>
               <li>Id: {id}</li>
               <li>Name: {name}</li>
               <li>Username: {username}</li>
               <li>Email: {email}</li>
               <li>Phone: {phone}</li>
               <li>Website: {website}</li>
           </ul>
        </div>
    );
};

export default UserDetails;