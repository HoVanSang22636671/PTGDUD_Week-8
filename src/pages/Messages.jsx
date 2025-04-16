import messageIcon from '../assets/Image/Chat.png'
function Messages() {
    return (
        <div className="flex min-h-screen w-full max-w-[1200px] mx-auto flex-col">
            {/* Header giống như "Detailed Report" */}
            <div className="flex items-center space-x-2 px-6 py-4">
                <img src={messageIcon} alt="Project Icon" className="w-5 h-5" />
                <h3 className="font-semibold text-lg text-gray-800">Message</h3>
            </div>

            {/* Nội dung bên dưới */}
            <div className="content flex-1 p-4 overflow-y-auto">
                <h1>Messages Page</h1>
            </div>
        </div>
    );
}

export default Messages;