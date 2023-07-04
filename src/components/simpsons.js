import React from 'react';
import Simpson from "./simpson";

const Simpsons = ({info, genId}) => {
    return info.map(simpson => {
        return (
            <Simpson
                key={genId()}
                name={simpson.name}
                surname={simpson.surname}
                age={simpson.age}
                gender={simpson.gender}
                src={simpson.photo}
            />
        );
    });
};

export default Simpsons;