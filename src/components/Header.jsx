import searchIcon from '../assets/Image/Search.png'
import bellIcon from '../assets/Image/Bell 1.png'
import questionIcon from '../assets/Image/Question 1.png'
import avt from '../assets/Image/Avatar 313.png'

function Header() {
    return (
        <div className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold text-pink-500">Dashboard</h3>

            <div className="flex items-center gap-6">
                {/* Search Box với icon nằm trong input */}
                <div className="relative w-64">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <img src={searchIcon} alt="Search" className="w-4 h-4" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 text-sm rounded-full focus:outline-none"
                    />
                </div>

                {/* Các icon bên phải */}
                <div className="flex items-center space-x-4">
                    <img src={bellIcon} alt="Bell" className="w-5 h-5 cursor-pointer" />
                    <img src={questionIcon} alt="Help" className="w-5 h-5 cursor-pointer" />
                    <img
                        src={avt}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full object-cover border-2 border-pink-300 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;