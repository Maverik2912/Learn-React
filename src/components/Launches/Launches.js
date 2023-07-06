import React, {useEffect, useState} from 'react';
import {fetchLaunches} from "../../requests/fetchLaunches";
import Launch from "../Launch/Launch";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import {generateRandomId} from "../../utils/getRandomId";
import styles from './Launches.module.css';

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchLaunches()
            .then(data => {
                setLaunches(data)
            })
            .catch(error => {setError(error)});
    }, []);

    const allLaunches = launches
        .filter(launch => launch.launch_year !== '2020')
        .map(launch => {
        return <Launch key={generateRandomId(10)} launch={launch} />
    })

    return (
        <div>
            {error ? <ErrorComponent error={error} />
            :
            <div className={styles.launchesContainer}>
                <h1 className={styles.mainTitle}>SpaceX Launches</h1>
                <div className={styles.launches}>{allLaunches}</div>
            </div>
            }
        </div>
    );
};

export default Launches;