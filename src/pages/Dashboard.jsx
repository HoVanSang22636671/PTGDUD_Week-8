import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DataTable from '../components/DataTable';

import detailIcon from '../assets/Image/File text 1.png';
import editIcon from '../assets/Image/Download.png';
import exportIcon from '../assets/Image/Move up.png';

function Dashboard() {
    const [tableData, setTableData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    // Fetch dữ liệu từ json-server
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

    const handleOpenEdit = (customer) => {
        setSelectedCustomer(customer);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedCustomer(null);
    };

    const handleSave = async () => {
        if (!selectedCustomer) return;

        try {
            await axios.put(`http://localhost:3001/customers/${selectedCustomer.id}`, selectedCustomer);
            fetchData(); // cập nhật lại dữ liệu
        } catch (error) {
            console.error('Lỗi khi cập nhật khách hàng:', error);
        }

        handleCloseModal();
    };

    return (
        <>
            <div className='flex items-center justify-between px-6 py-4'>
                <div className="flex items-center space-x-2">
                    <img src={detailIcon} alt="Detail" className="w-5 h-5" />
                    <h3 className="font-semibold text-lg">Detailed Report</h3>
                </div>

                <div className="flex items-center space-x-3">
                    <button className="flex items-center border border-pink-400 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-50 transition">
                        <img src={editIcon} alt="Edit" className='w-4 h-4 mr-2' />
                        Import
                    </button>

                    <button className="flex items-center border border-pink-400 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-50 transition">
                        <img src={exportIcon} alt="Export" className="w-4 h-4 mr-2" />
                        Export
                    </button>
                </div>
            </div>

            <DashboardTable tableData={tableData} onEdit={handleOpenEdit} />

            <EditCustomerModal
                open={openModal}
                onClose={handleCloseModal}
                customer={selectedCustomer}
                setCustomer={setSelectedCustomer}
                onSave={handleSave}
            />
        </>
    );
}

export default Dashboard;
