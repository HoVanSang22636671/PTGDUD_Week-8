import React, { useEffect, useState } from "react";
import cartIcon from "../assets/Image/Button 1509.png";
import dollarIcon from "../assets/Image/Button 1529.png"
import userIcon from "../assets/Image/Button 1530.png"
import overviewIcon from "../assets/Image/Squares four 1.png"
import axios from "axios";
function Overview() {
    const Card = ({ title, value, percent, icon, bg }) => (
        <div className={`flex justify-between p-4 rounded-2xl shadow ${bg}`}>
            <div className="text-left">
                <p className="text-sm font-semibold text-gray-700">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900">${Number(value).toLocaleString()}</h3>
                <p className="text-sm text-green-600 mt-1">▲ {percent}% <span className="text-gray-500">period of change</span></p>
            </div>
            <img src={icon} alt="icon" className="w-10 h-10" />
        </div>
    )
    const [data, setData] = useState({
        turnover: 0,
        profit: 0,
        customer: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [turnoverRes, profitRes, customerRes] = await Promise.all([
                    axios.get('http://localhost:3001/turnover'),
                    axios.get('http://localhost:3001/profit'),
                    axios.get('http://localhost:3001/customer'),
                ]);
                setData({
                    turnover: turnoverRes.data.amount,
                    profit: profitRes.data.amount,
                    customer: customerRes.data.total,
                });
            } catch (error) {
                console.log("Dùng dữ liệu giả định.", error);
                setData({
                    turnover: 92405,
                    profit: 32218,
                    customer: 298,
                });
            }
        };
        fetchData();
    }, []);



    return (
        <div className="p-4">
            <div className="flex items-center gap-2 mb-4 p-3">
                <img src={overviewIcon} alt="Overview Icon" className="w-6 h-6" />
                <h3 className="text-xl font-bold">Overview</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <Card
                    title="Turnover"
                    value={data.turnover}
                    percent={5.39}
                    icon={cartIcon}
                    bg="bg-red-100"
                />
                <Card
                    title="Profit"
                    value={data.profit}
                    percent={5.39}
                    icon={dollarIcon}
                    bg="bg-blue-100"
                />
                <Card
                    title="New customer"
                    value={data.customer}
                    percent={6.84}
                    icon={userIcon}
                    bg="bg-blue-100"
                />
            </div>
        </div>
    );
}

export default Overview;