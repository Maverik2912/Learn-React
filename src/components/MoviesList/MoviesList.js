import {useLoaderData} from "react-router-dom";

import {Carousel} from "../Carousel/Carousel";
import styles from './MoviesList.module.css';


const MoviesList = () => {
   const trendingMovies = useLoaderData().trendingMovies.data.results;
   const topRatedMovies = useLoaderData().topRatedMovies.data.results;
   const upcomingMovies = useLoaderData().upcomingMovies.data.results;

    return (
        <div className={styles.container}>
            <Carousel movies={upcomingMovies} title='Upcoming' />
            <Carousel movies={trendingMovies} title='Trending Now' />
            <Carousel movies={topRatedMovies} title='Top Rated All Time' />
        </div>
    );
};

export {MoviesList};