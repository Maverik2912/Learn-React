import {MoviesList} from "../../components";
import {moviesService} from "../../services/moviesService";

const MoviesListPage = () => {
    return (
        <div>
            <MoviesList />
        </div>
    );
};

const MoviesListPageLoader = async () => {
    const trendingMovies = await moviesService.getMovies();
    const topRatedMovies = await moviesService.getBestRating();

    return {
        trendingMovies, topRatedMovies
    }
}

export {MoviesListPage, MoviesListPageLoader};