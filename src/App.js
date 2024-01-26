import './App.css';

import Header from './components/header/index';
import AboutMe from './components/about-me';
import Project from './components/project';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="section">
        <AboutMe/>
        <Project/>
      </div>
    </div>
  );
}

export default App;
