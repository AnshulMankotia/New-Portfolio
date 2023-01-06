import './App.css';
import About from './Components/About/About';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
