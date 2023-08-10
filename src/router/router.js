import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts";
import {links} from "../constants";
import {CarsPage} from "../pages";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={links.CARS} />
            },
            {
                path: links.CARS,
                element: <CarsPage />
            }
        ]
    }
]);

export {router}