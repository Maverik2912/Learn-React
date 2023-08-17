import styles from './Episode.module.css';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {links} from "../../../constants";
const Episode = ({episode}) => {
    const {name, air_date, episode: seriesNumber} = episode;
    const charactersIds = episode.characters;
    const navigate = useNavigate();

    const moveToCharactersPage = () => {
        navigate(links.CHARACTERS, {state: {charactersIds, name}});
    }

    return (
        <div onClick={moveToCharactersPage} className={styles.episode}>
            <div><b>Title:</b> {name}</div>
            <div><b>Air date:</b> {air_date}</div>
            <div><b>Series number:</b> {seriesNumber}</div>
        </div>
    );
};

export {Episode};