import {MoviesListCard} from "../../components";
import {moviesService} from "../../services/moviesService";

const MoviesListTimePage = () => {
    return (
        <div>
            <MoviesListCard />
        </div>
    );
};

const MoviesListTimePageLoader = async ({params}) => {
    const {year} = params;
    const movies = await moviesService.getByTimeInterval(year, (+year + 9).toString(), 1);
    return {year, movies}
}

export {MoviesListTimePage, MoviesListTimePageLoader};