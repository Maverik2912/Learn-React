import {useLoaderData, useLocation, useNavigation} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import styles from './MoviesListCard.module.css';
import {genId} from "../../utils/genId";
import {MoviesPrinter} from "../MoviesPrinter/MoviesPrinter";
const MoviesListCard = () => {
   const movies = useLoaderData().movies.data.results;
   const genreName = useLoaderData().genreName;
   const year = useLoaderData().year;

    console.log(movies)

   const location = useLocation();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {location.pathname.includes('genres') ? `Genre ${genreName}` : `Movies from ${year} to ${(+year + 9).toString()}`}
            </h1>
            <MoviesPrinter movies={movies}/>
        </div>
    );
};

export {MoviesListCard};