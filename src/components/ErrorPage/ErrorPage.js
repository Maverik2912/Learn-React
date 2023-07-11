import React from 'react';

const ErrorPage = ({error}) => {
    return (
        <div>
            <h3>Ooooups... Something went wrong</h3>
            <p>{error}</p>
        </div>
    );
};

export default ErrorPage;