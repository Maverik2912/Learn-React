import styles from "../MoviesListCard/MoviesListCard.module.css";
import {genId} from "../../utils/genId";
import {PosterPreview} from "../PosterPreview/PosterPreview";

const MoviesPrinter = ({movies}) => {
    return (
        <div className={styles.gridContainer}>
            {movies.map(movie => {
                return (
                    <div key={genId(4)}>
                        <PosterPreview key={movie.id} movie={movie}/>
                        <h2 key={genId(4)} className={styles.movieTitle}>{movie.title}</h2>
                    </div>
                )
            })}
        </div>
    );
};

export {MoviesPrinter};