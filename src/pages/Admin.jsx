import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Overview from "../components/Overview";
import DataTable from "../components/DataTable";

function Admin() {
    return (
        <div className="flex min-h-screen w-full max-w-[1200px] mx-auto">
            {/* Sidebar cố định bên trái */}
            <Sidebar />

            {/* Main content bên phải */}
            <div className="flex-1 h-screen flex flex-col">
                <Header />
                <div className="overview p-4">
                    <Overview />
                </div>
                <div className="content flex-1 p-4 overflow-y-auto">
                    <DataTable />
                </div>
            </div>
        </div>
    );
}

export default Admin;
