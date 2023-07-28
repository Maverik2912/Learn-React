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
    const movies = await moviesService.getByGenreId(genreId);
    return {movies, genreName}
}

export {MoviesListCardPage};