function Sidebar() {
    return (
        <aside className="row-span-2 border border-blue-400 p-2 flex flex-col justify-between items-center">
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
        </aside>
    );
}

export default Sidebar;