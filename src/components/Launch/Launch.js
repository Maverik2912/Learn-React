import React from 'react';
import styles from './Launch.module.css';
const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = launch;

    return (
        <div className={styles.launchContainer}>
            <p><b>Mission name:</b> "{mission_name}"</p>
            <p><b>Launch year:</b> {launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Launch;