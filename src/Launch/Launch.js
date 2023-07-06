import React from 'react';

const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = launch;

    return (
        <div>
            <p><b>Mission name:</b> "{mission_name}"</p>
            <p><b>Launch year:</b> {launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Launch;