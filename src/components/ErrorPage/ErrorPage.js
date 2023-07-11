import React from 'react';

const ErrorPage = ({error}) => {
    return (
        <div>
            <h1>Ooooups... Something went wrong</h1>
            <p>{error}</p>
        </div>
    );
};

export default ErrorPage;