import './App.css';
import About from './Components/About';
import Contant from './Components/Contant';
import Header from './Components/Header'
import Home from './Components/Home';
import Projects from './Components/Projects';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contant />
    </div>
  );
}

export default App;
