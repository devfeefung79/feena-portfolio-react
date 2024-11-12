import './App.css';

import AboutMe from './components/about-me';
import ContactMe from './components/contact-me';
import Header from './components/header/index';
import Project from './components/project';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Project/>
      <ContactMe/>
    </div>
  );
}

export default App;
