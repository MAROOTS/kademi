
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/spiderman.jpg'
const Hero = () => {
    return (
        <section className="bg-gray-900 text-white h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">

                {/* Text Content */}
                <div className="flex-1">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2 className="text-xl md:text-2xl">I'M</h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">MAROOTS MARVEL</h1>
                    <p className="text-lg md:text-2xl mt-4">
                        Full Stack Developer & Software Engineer
                    </p>
                    <button className="mt-6 px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition duration-300" >
                        Contact Me
                    </button>
                </div>

                {/* Profile Image */}
                <div className="flex-1 mt-10 md:mt-0 relative">
                    <img
                        src={Logo}
                        alt="Profile"
                        className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg"
                    />
                </div>

                {/* Social Media Icons */}
                <div className="absolute bottom-10 right-10 md:right-16 space-y-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-yellow-500 hover:text-yellow-600 transition duration-300" size={24} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-yellow-500 hover:text-yellow-600 transition duration-300" size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-yellow-500 hover:text-yellow-600 transition duration-300" size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
