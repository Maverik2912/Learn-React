import React from 'react';

const UserAddress = ({address}) => {
    const {city, street, suite} = address;
    return (
        <div>
            <h3>Address:</h3>
            <ul>
                <li>City: {city}</li>
                <li>Street: {street}</li>
                <li>Suite: {suite}</li>
            </ul>
            
        </div>
    );
};

export default UserAddress;