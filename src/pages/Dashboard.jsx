import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

import DashboardTable from '../components/DataTable';
import EditModal from '../components/EditModal';
import ImportModal from '../components/ImportModal';
import detailIcon from '../assets/Image/File text 1.png';
import editIcon from '../assets/Image/Download.png';
import exportIcon from '../assets/Image/Move up.png';

function Dashboard() {
    const [tableData, setTableData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);

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

    const handleImportClick = () => {
        setIsImportModalOpen(true);
    };

    const handleSaveEdit = async (userData) => {
        try {
            await axios.put(`http://localhost:3001/customers/${userData.id}`, userData);
            setIsEditModalOpen(false);
            fetchData();
        } catch (error) {
            console.error('Failed to update user', error);
        }
    };

    const handleSaveImport = async (userData) => {
        try {
            await axios.post('http://localhost:3001/customers', userData);
            fetchData();
        } catch (error) {
            console.error('Failed to save user', error);
        }
    };

    const handleImportExcel = async (file) => {
        try {
            const reader = new FileReader();
            reader.onload = async (e) => {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];
                    const jsonData = XLSX.utils.sheet_to_json(sheet);

                    // Gửi từng khách hàng nếu /bulk không hoạt động
                    for (const customer of jsonData) {
                        await axios.post('http://localhost:3001/customers', customer);
                    }
                    fetchData();
                } catch (error) {
                    console.error('Failed to process Excel data', error);
                }
            };
            reader.readAsArrayBuffer(file);
        } catch (error) {
            console.error('Failed to read Excel file', error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-2">
                    <img src={detailIcon} alt="Detail" className="w-5 h-5" />
                    <h3 className="font-semibold text-lg">Detailed Report</h3>
                </div>

                <div className="flex items-center space-x-3">
                    <button
                        onClick={handleImportClick}
                        className="flex items-center border border-pink-400 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-50 transition"
                    >
                        <img src={editIcon} alt="Import" className="w-4 h-4 mr-2" />
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
            {isImportModalOpen && (
                <ImportModal
                    onClose={() => setIsImportModalOpen(false)}
                    onSave={handleSaveImport}
                    onImportExcel={handleImportExcel}
                />
            )}
        </>
    );
}

export default Dashboard;