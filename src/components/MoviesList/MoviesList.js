import {Carousel} from "../Carousel/Carousel";
import {useLoaderData} from "react-router-dom";

const MoviesList = () => {
   const trendingMovies = useLoaderData().trendingMovies.data.results;
   const topRatedMovies = useLoaderData().topRatedMovies.data.results;

    return (
        <div>
            <Carousel movies={trendingMovies} title='Trending Now' />
            <Carousel movies={topRatedMovies} title='Top Rated' />
        </div>
    );
};

export {MoviesList};