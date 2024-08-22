
// eslint-disable-next-line react/prop-types
const ProjectCard = ({ image, title, description }) => {
    return (
        <div className="relative group">
            <img src={image} alt={title} className="object-cover w-full h-full rounded-lg" />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
                <h3 className="text-white text-xl font-semibold">{title}</h3>
                <p className="text-gray-300 text-center px-4">{description}</p>
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">See More</button>
            </div>
        </div>
    );
};

export default ProjectCard;
