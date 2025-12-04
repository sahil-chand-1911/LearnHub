import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, LogIn, LogOut, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <BookOpen className="h-8 w-8 text-indigo-600" />
                            <span className="ml-2 text-xl font-bold text-gray-800">LearnHub</span>
                        </Link>
                    </div>

                    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
                        <Link to="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link to="/courses" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                            Courses
                        </Link>
                        <Link to="/roadmaps" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                            Roadmaps
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                            About
                        </Link>
                        <Link to="/contact" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                            Contact
                        </Link>
                        {token ? (
                            <>
                                <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center text-gray-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    <LogOut className="h-4 w-4 mr-1" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="flex items-center bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                <LogIn className="h-4 w-4 mr-1" />
                                Login
                            </Link>
                        )}
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            Home
                        </Link>
                        <Link to="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            Courses
                        </Link>
                        <Link to="/roadmaps" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            Roadmaps
                        </Link>
                        {token ? (
                            <>
                                <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
