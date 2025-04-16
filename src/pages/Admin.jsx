import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Overview from "../components/Overview";
import { Outlet } from "react-router-dom";

function Admin() {
    return (
        <div className="flex min-h-screen w-full max-w-[1200px] mx-auto">
            <Sidebar />
            <div className="flex-1 h-screen flex flex-col">
                <Header />
                <div className="overview p-4">
                    <Overview />
                </div>
                <div className="content flex-1 w-[951px] p-4 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Admin;
