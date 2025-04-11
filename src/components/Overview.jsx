function Overview() {

    return (
        <main className="p-2 border border-blue-400">
            {/* Green boxes */}
            <div className="flex justify-between mb-4 space-x-2">
                {[1, 2, 3].map((n) => (
                    <div key={n} className="flex items-center justify-between bg-green-600 text-white px-4 py-2 w-full">
                        default00
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            alt="React"
                            className="w-6 h-6"
                        />
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            {[1, 2, 3, 4, 5].map((n) => (
                                <th key={n} className="border px-4 py-2">
                                    Column {n}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3].map((row) => (
                            <tr key={row}>
                                {[1, 2, 3, 4, 5].map((col) => (
                                    <td key={col} className="border px-4 py-2 text-sm text-gray-600">
                                        Row {row}, Col {col}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Overview;