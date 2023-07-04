import React from 'react';
import Simpson from "./Simpson";

const Simpsons = ({info, genId}) => {
    return info.map(({name, surname, age, gender, photo}) => {
        return (
            <Simpson
                key={genId()}
                name={name}
                surname={surname}
                age={age}
                gender={gender}
                src={photo}
            />
        );
    });
};

export default Simpsons;