import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";

const Main = () => {
    return (
        <div className="flex max-w-screen-2xl mx-auto">
            <div className="">
                <SideBar></SideBar>
            </div>
            <div className="md:ml-64 overflow-x-hidden">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;