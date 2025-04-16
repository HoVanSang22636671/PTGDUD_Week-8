import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DashboardTable from '../components/DataTable';
import EditModal from '../components/EditModal';
import detailIcon from '../assets/Image/File text 1.png';
import editIcon from '../assets/Image/Download.png';
import exportIcon from '../assets/Image/Move up.png';

function Dashboard() {
    const [tableData, setTableData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:3001/customers');
            setTableData(res.data);
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
        }
    };
    const handleEditClick = (user) => {
        setSelectedUser(user);
        setIsEditModalOpen(true);
    };
    const handleSaveEdit = async (updatedUser) => {
        try {
            await axios.put(`http://localhost:3001/customers/${updatedUser.id}`, updatedUser);
            setIsEditModalOpen(false);
            fetchData(); // Cập nhật lại bảng sau khi chỉnh sửa
        } catch (error) {
            console.error('Failed to update user', error);
        }
    };



    return (
        <>
            <div className='flex items-center justify-between px-6 py-4'>
                <div className="flex items-center space-x-2">
                    <img src={detailIcon} alt="Detail" className="w-5 h-5" />
                    <h3 className="font-semibold text-lg">Detailed Report</h3>
                </div>

                <div className="flex items-center space-x-3">
                    <button className="flex items-center bg-white border border-pink-400 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-50 transition">
                        <img src={editIcon} alt="Edit" className='w-4 h-4 mr-2' />
                        Import
                    </button>

                    <button className="flex items-center border border-pink-400 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-50 transition">
                        <img src={exportIcon} alt="Export" className="w-4 h-4 mr-2" />
                        Export
                    </button>
                </div>
            </div>

            <DashboardTable tableData={tableData} onEdit={handleEditClick} />
            {isEditModalOpen && (
                <EditModal
                    user={selectedUser}
                    isNew={false}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={handleSaveEdit}
                />
            )}
        </>
    );
}

export default Dashboard;
