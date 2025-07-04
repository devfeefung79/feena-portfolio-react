import './App.css';

import AboutMe from './components/about-me';
import ContactMe from './components/contact-me';
import Header from './components/header/index';
import Project from './components/project';
import Skills from './components/skills';

import CustomScrollToTopButton from './components/custom/customScrollToTopButton';
import CustomVerticalNavBar from './components/custom/customVerticalNavBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Project/>
      <Skills/>
      <ContactMe/>
      <CustomScrollToTopButton/>
      <CustomVerticalNavBar/>
    </div>
  );
}

export default App;
