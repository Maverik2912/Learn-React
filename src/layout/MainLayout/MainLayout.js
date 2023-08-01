import React from "react";
import {NavBar} from "../../components/NavBar/NavBar";
import {Outlet} from "react-router-dom";
class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <NavBar />
                <Outlet />
            </>
        );
    }
}
export {MainLayout}
