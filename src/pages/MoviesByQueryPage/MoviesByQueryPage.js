import {moviesService} from "../../services/moviesService";
import {MoviesListCard} from "../../components";

const MoviesByQueryPage = () => {
    return (
        <div>
            <MoviesListCard />
        </div>
    );
};

const MoviesByQueryPageLoader = async ({params}) => {
    const {query} = params;
    const movies = await moviesService.getByQuery(query, 1)
    return {movies, query}
}

export {MoviesByQueryPage, MoviesByQueryPageLoader};