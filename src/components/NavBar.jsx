import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white fixed w-full z-20 top-0 shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="text-yellow-500">
                        MyPortfolio
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:text-yellow-500">Home</Link>
                    <Link to="/about" className="hover:text-yellow-500">About</Link>
                    <Link to="/projects" className="hover:text-yellow-500">Projects</Link>
                    <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
                </div>

                {/* Social Media Icons */}
                <div className="hidden md:flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                        <FaTwitter size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 text-white px-4 py-6 space-y-4">
                    <Link to="/" className="block hover:text-yellow-500" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" className="block hover:text-yellow-500" onClick={toggleMenu}>About</Link>
                    <Link to="/projects" className="block hover:text-yellow-500" onClick={toggleMenu}>Projects</Link>
                    <Link to="/contact" className="block hover:text-yellow-500" onClick={toggleMenu}>Contact</Link>
                    <div className="flex space-x-4 pt-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
