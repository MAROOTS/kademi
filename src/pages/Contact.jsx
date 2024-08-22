
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-900 py-16">
            <div className="container mx-auto text-center text-white">
                <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
                <div className="flex flex-col md:flex-row justify-center items-center mb-8 space-y-4 md:space-y-0 md:space-x-8">
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-yellow-400" />
                        <span>kademieugine@email.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaPhone className="text-yellow-400" />
                        <span>+2547-909-408-18</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-yellow-400" />
                        <span>Nairobi, Kenya</span>
                    </div>
                </div>
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaWhatsapp /></a>
                </div>
                <p className="text-yellow-400 font-semibold">“Thanks for Scrolling”</p>
            </div>
        </section>
    );
};

export default Contact;
