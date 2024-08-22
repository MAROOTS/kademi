
import { FaReact, FaJava, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import {SiJavascript, SiSpringboot, SiMongodb, SiMysql, SiPostgresql, SiNextdotjs} from 'react-icons/si';

const skills = [
    { name: 'React Native', icon: <FaReact color="#61DAFB" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'Java', icon: <FaJava color="#007396" /> },
    { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'PostgresSQL', icon: <SiPostgresql color="#336791" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
];

const Skills = () => {
    return (
        <div className="bg-gray-900 text-white py-12">
            <div className="container mx-auto p-8">
                <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-gray-800 hover:bg-gray-700 transition duration-300"
                        >
                            <div className="text-5xl mb-4">{skill.icon}</div>
                            <p className="text-lg font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
