function Sidebar() {
    return (
        <div className="sidebar flex flex-col justify-between h-screen p-4">
            <div className="space-y-2 text-sm text-blue-700">
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
            </div>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
                className="w-20 h-20"
            />
        </div>
    );
}

export default Sidebar;