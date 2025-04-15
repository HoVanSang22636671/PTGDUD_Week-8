import React from 'react';
import { NavLink } from 'react-router-dom';

import logoIcon from '../assets/Image/Image 1858.png';
import dashboardIcon from '../assets/Image/Squares four 1.png';
import projectIcon from '../assets/Image/Folder.png';
import teamIcon from '../assets/Image/Groups.png';
import analyticIcon from '../assets/Image/Pie chart.png';
import messageIcon from '../assets/Image/Chat.png';
import integreationIcon from '../assets/Image/Code.png';
import versionImg from '../assets/Image/Group.png'; // Banner ở dưới cùng

function Sidebar() {
    return (
        <div className="sidebar flex flex-col justify-between h-screen w-64 p-4 bg-white shadow-md">
            <div>
                {/* Logo */}
                <div className="logo mb-6 px-4">
                    <img src={logoIcon} alt="Logo" className="w-28" />
                </div>

                {/* Menu */}
                <div className="menu space-y-2">
                    <NavLink to="/admin" end className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                        <img src={dashboardIcon} alt="Dashboard" className="w-5 h-5" />
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink to="/projects" className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                        <img src={projectIcon} alt="Projects" className="w-5 h-5" />
                        <span>Projects</span>
                    </NavLink>

                    <NavLink to="/teams" className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                        <img src={teamIcon} alt="Teams" className="w-5 h-5" />
                        <span>Teams</span>
                    </NavLink>

                    <NavLink to="/analytics" className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                        <img src={analyticIcon} alt="Analytics" className="w-5 h-5" />
                        <span>Analytics</span>
                    </NavLink>

                    <NavLink to="/messages" className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                        <img src={messageIcon} alt="Messages" className="w-5 h-5" />
                        <span>Messages</span>
                    </NavLink>

                    <NavLink to="/integrations" className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                        <img src={integreationIcon} alt="Integrations" className="w-5 h-5" />
                        <span>Integrations</span>
                    </NavLink>
                </div>
            </div>

            {/* Banner dưới cùng */}
            <div className="text-center px-4">
                <img src={versionImg} alt="Version Update" className="w-full mb-2 rounded" />
                <p className="text-sm font-semibold">V2.0 is available</p>
                <button className="mt-2 px-3 py-1 bg-white border border-blue-500 text-blue-500 rounded-full text-sm hover:bg-blue-50 transition">
                    Try now
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
