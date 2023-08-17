import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Button} from "@mui/material";

import {charactersActions} from "../../../redux/slices/characterSlice";
import {Character} from "../Character/Character";
import {episodeActions} from "../../../redux";
import styles from './Characters.module.css';
const Characters = () => {
    const {characters} = useSelector(store => store.characters);
    const {state: {charactersIds, name}} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(episodeActions.setEpisodeTitle(name));
        dispatch(charactersActions.getAll(charactersIds));
    }, []);
    return (
        <>
            <Button variant='contained' onClick={() => navigate(-1)}>Back</Button>
            <div className={styles.characters}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </>
    );
};

export {Characters};