import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {episodeActions} from "../../../redux";
import {Episode} from "../Episode/Episode";
import styles from './Episodes.module.css';
import {useSearchParams} from "react-router-dom";
const Episodes = () => {
    const {episodes} = useSelector(store => store.episodes);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    useEffect( () => {
        setQuery(prev => ({...prev, page: prev.get('page')}));
        dispatch(episodeActions.setEpisodeTitle(null));
        dispatch(episodeActions.getAll({page}));
    }, [page]);

    return (
        <div className={styles.episodes}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode} /> )}
        </div>
    );
};

export {Episodes};