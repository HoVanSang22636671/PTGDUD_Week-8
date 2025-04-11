import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Overview from "../components/Overview";

function Admin() {
    return (
        <div className="grid grid-cols-[200px_1fr] grid-rows-[auto_1fr] border border-blue-400">
            <Sidebar />
            <Header />
            <Overview />
        </div>
    );
}

export default Admin;