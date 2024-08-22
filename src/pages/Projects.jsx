import ProjectCard from '../components/ProjectCard';
import projectImage1 from '../assets/auth.png';
import projectImage2 from '../assets/bookstore.png';
import projectImage3 from '../assets/e-commerce.png';
import projectImage4 from '../assets/shoes by me.png';
import Counter from '../components/Counter';

const Projects = () => {
    const projects = [
        { image: projectImage1, title: 'Amazon Scrapper', description: 'A simple blog with user authentication...' },
        { image: projectImage2, title: 'Bookstore', description: 'A simple bookstore where one can view books according to genres and categories, built in Spring Boot and React.' },
        { image: projectImage3, title: 'E-commerce', description: 'One can view products, add to cart and view details too.' },
        { image: projectImage4, title: 'Shoes-by-Me', description: 'An outstanding website for selling shoes, from men’s to kids to women, and also sports.' }
    ];

    return (
        <section id="projects" className="bg-gray-900 py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
                    <Counter title="Projects Completed" end={20} />
                    <Counter title="Projects In Progress" end={5} />
                </div>
            </div>
        </section>
    );
};

export default Projects;
