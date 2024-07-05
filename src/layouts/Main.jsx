import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";

const Main = () => {
    return (
        <div className="flex gap-2">
            <div className="">
                <SideBar></SideBar>
            </div>
            <div className="md:ml-64 p-2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;