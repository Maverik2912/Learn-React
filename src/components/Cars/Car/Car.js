import React from "react";
class Car extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, brand, price, year} = this.props.car;

        return (
            <>
                <div>
                    <p><b>Id:</b>{id}</p>
                    <p><b>Brand:</b>{brand}</p>
                    <p><b>Price:</b>{price}</p>
                    <p><b>Year:</b>{year}</p>
                </div>
            </>
        )
    }
}

export {Car};