import {useContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

import {moviesService} from "../../../services/moviesService";
import {links} from "../../../constants/links/links";
import {MovieAppContext} from "../../../layouts/MainLayout";
import './SelectComponent.css';

const SelectComponent = ({inputLabel, options, linkPrefix}) => {
    const {setSelectedValue, isDark} = useContext(MovieAppContext);

    const [selectedValue, setSelectedValueLocal] = useState("");
    const [genresList, setGenresList] = useState([]);
    const [genreName, setGenreName] = useState(null);
    const navigate = useNavigate();

    const labelRef = useRef();

    useEffect(() => {
        moviesService.getGenres()
            .then(({data}) => setGenresList(data.genres));
    }, []);

    useEffect(() => {
        if (selectedValue) {
            if (inputLabel === 'All genres') {
                for (const genreItem of genresList) {
                    if (genreItem.id === selectedValue) {
                        setGenreName(genreItem.name);
                    }
                }
                navigate(`${links.GENRES}/${genreName}/${selectedValue}`);
            } else if (inputLabel === 'All times') {
                navigate(`${links.TIME}/${selectedValue}`)
            }
        }
    }, [selectedValue, genreName]);

    return (
        <div className="custom-select">
            <label htmlFor="select-choice1" className="label select-1"><span
                className="selection-choice">{inputLabel}</span>
            </label>
            <select
                id="select-choice1"
                className="select"
                value={selectedValue}
                onChange={e => setSelectedValue(e.target.value)}
            >
                {options.map(option => <option
                    key={option.name}
                    value={option.id}>{option.name}
                </option>)}
            </select>
        </div>
    );
}
export {SelectComponent};