import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";

const Home = () => {
  return(
      <div>
        <NavBar/>
          <Hero/>
          <About/>
          <Projects/>
      </div>
  )
}
export default Home