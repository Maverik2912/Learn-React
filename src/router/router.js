import {createBrowserRouter} from 'react-router-dom';
import {MainLayout} from "../layout/MainLayout/MainLayout";
import {Cars, Comments, Posts} from "../components";
import {links} from "../constants/links";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Posts />
            },
            {
                element: <Posts />,
                path: links.POSTS,
            },
            {
                element: <Comments />,
                path: links.COMMENTS
            },
            {
                element: <Cars />,
                path: links.CARS
            }
        ]
    }
])