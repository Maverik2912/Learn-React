import {Button} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import styles from './EpisodesPagination.module.css';

const EpisodesPagination = () => {
    const [, setQuery] = useSearchParams();
    const {next, prev} = useSelector(store => store.episodes);

    const getPrevPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page') - 1}));
    }

    const getNextPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page') + 1}));
    }

    return (
        <div className={styles.container}>
            <Button variant='contained' disabled={!prev} onClick={getPrevPage}>Prev</Button>
            <Button variant='contained' disabled={!next} onClick={getNextPage}>Next</Button>
        </div>
    );
};

export {EpisodesPagination};