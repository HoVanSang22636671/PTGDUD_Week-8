import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import editIcon from '../assets/Image/create.png';
import avatarDefault from '../assets/Image/Avatar.png';

function DataTable({ tableData, onEdit }) {
    console.log("Dữ liệu nhận được:", tableData);

    const columns = [
        {
            field: 'name',
            headerName: 'CUSTOMER NAME',
            width: 200,
            renderCell: (params) => (
                <div className="flex items-center gap-2">
                    <img
                        src={params.row.avatar || avatarDefault}
                        alt={params.value}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium">{params.value}</span>
                </div>
            ),
        },
        { field: 'company', headerName: 'COMPANY', width: 180 },
        {
            field: 'orderValue',
            headerName: 'ORDER VALUE',
            width: 120,
            renderCell: (params) => {
                const value = Number(params.value).toFixed(2);
                return <span>${value}</span>;
            }
        },
        { field: 'orderDate', headerName: 'ORDER DATE', width: 130 },
        {
            field: 'status',
            headerName: 'STATUS',
            width: 130,
            renderCell: (params) => {
                const statusColor = {
                    New: 'bg-blue-100 text-blue-500',
                    'In-progress': 'bg-yellow-100 text-yellow-600',
                    Completed: 'bg-green-100 text-green-600',
                }[params.value] || 'bg-gray-100 text-gray-600';

                return (
                    <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColor}`}
                    >
                        {params.value}
                    </span>
                );
            },
        },
        {
            field: 'actions',
            headerName: '',
            width: 60,
            sortable: false,
            renderCell: (params) => (
                <button onClick={() => onEdit(params.row)}>
                    <img src={editIcon} alt="Edit" className="w-5 h-5" />
                </button>
            ),
        },
    ];
    return (
        <div style={{ height: 500, width: '100%' }} className="bg-white rounded-xl shadow-md p-4">
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSizeOptions={[5, 10]}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                sortingOrder={['asc', 'desc']}
                checkboxSelection
                getRowId={(row) => row.id}
            />
        </div>
    );
}

export default DataTable;
