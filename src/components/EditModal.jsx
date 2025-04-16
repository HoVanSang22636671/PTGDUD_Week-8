import React, { useState, useRef, useEffect } from 'react';

const EditModal = ({ user, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...user });
    const [imagePreview, setImagePreview] = useState(user.avatar || null);
    const fileInputRef = useRef();

    useEffect(() => {
        setFormData(user);
        setImagePreview(user.avatar || null);
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData(prev => ({ ...prev, avatar: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = () => {
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Customer</h2>

                <div className="mb-4">
                    {imagePreview ? (
                        <div className="flex flex-col items-center">
                            <img
                                src={imagePreview}
                                alt="User"
                                className="w-24 h-24 rounded-full object-cover mb-2"
                            />
                            <button
                                onClick={handleImageUploadClick}
                                className="text-sm text-gray-800 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition"
                            >
                                Change Image
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="border border-gray-300 rounded p-2"
                            />
                        </div>
                    )}
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Name</label>
                    <input
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Company</label>
                    <input
                        name="company"
                        value={formData.company || ''}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Order Value</label>
                    <input
                        name="orderValue"
                        value={formData.orderValue || ''}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Order Date</label>
                    <input
                        type="date"
                        name="orderDate"
                        value={formData.orderDate || ''}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Status</label>
                    <select
                        name="status"
                        value={formData.status || ''}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="New">New</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className="flex justify-end space-x-2">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-gray-800 px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;