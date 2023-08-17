import {Header} from "../../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export {MainLayout};