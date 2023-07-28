import {MoviesListCard} from "../../components";
import {moviesService} from "../../services/moviesService";

const MoviesListCardPage = () => {
    return (
        <div>
            <MoviesListCard />
        </div>
    );
};

export const MoviesListCardPageLoader = async ({params}) => {
    const {genreName, genreId} = params;
    const movies = await moviesService.getByGenreId(genreId, 1);
    return {movies, genreName, genreId}
}

export {MoviesListCardPage};