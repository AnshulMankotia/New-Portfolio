import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Pricing from './Components/Pricing/Pricing';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Pricing/>
      <Team/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
