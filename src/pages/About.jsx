import Logoo from '../assets/spiderman.jpg'
import Skills from "../components/Skills.jsx";

const About = () => {
    return (
        <>
            <div className="container mx-auto p-8 text-white bg-gray-900">
                <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="md:w-1/3">
                        <img
                            src={Logoo}
                            alt="Profile"
                            className="rounded-full shadow-lg"
                        />
                    </div>
                    <div className="md:w-2/3 text-lg leading-relaxed">
                        <p>

                            Hello! I'm a passionate developer with expertise in building modern and responsive web
                            applications. My skill set includes both front-end and back-end development, and I have
                            experience working with various technologies like React, Tailwind CSS, MongoDB, and more.
                        </p>
                        <p className="mt-4">

                            I'm dedicated to creating efficient and user-friendly applications that provide great user
                            experiences. In my free time, I enjoy learning new technologies and contributing to
                            open-source projects.
                        </p>
                        <p className="mt-4">

                            Let's connect and create something amazing together!
                        </p>
                    </div>
                </div>
            </div>
            <Skills/>
        </>

    );
};

export default About;

