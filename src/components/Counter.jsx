
import CountUp from 'react-countup';

// eslint-disable-next-line react/prop-types
const Counter = ({ title, end }) => (
    <div className="text-center">
        <h3 className="text-5xl font-bold text-yellow-500">
            <CountUp end={end} duration={3} />
        </h3>
        <p className="text-xl text-gray-300 mt-2">{title}</p>
    </div>
);

export default Counter;
