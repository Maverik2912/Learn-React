import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {UseMemoPage} from "../pages/UseMemoPage/UseMemoPage";
import {links} from "../constants/links";
import {UseCallbackPage} from "../pages/UseCallbackPage/UseCallbackPage";
import {UseTogglePage} from "../pages/UseTogglePage/UseTogglePage";
import {UseFetchPage} from "../pages/UseFetchPage/UseFetchPage";
import {UseArrayPage} from "../pages/UseArrayPage/UseArrayPage";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={links.USE_MEMO} />
            },
            {
                path: links.USE_MEMO,
                element: <UseMemoPage />
            },
            {
                path: links.USE_CALLBACK,
                element: <UseCallbackPage />
            },
            {
                path: links.USE_TOGGLE,
                element: <UseTogglePage />
            },
            {
                path: links.USE_FETCH,
                element: <UseFetchPage />
            },
            {
                path: links.USE_ARRAY,
                element: <UseArrayPage />
            }
        ]
    }
])