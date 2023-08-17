import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts";
import {links} from "../constants";
import {CharactersPage, EpisodesPage, ErrorPage} from "../pages";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to={links.EPISODES} />
            },
            {
                path: links.EPISODES,
                element: <EpisodesPage />
            },
            {
                path: links.CHARACTERS,
                element: <CharactersPage />
            }
        ]
    }
]);

export {
    router
}