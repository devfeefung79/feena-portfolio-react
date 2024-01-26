import './index.css';

import Slideshow from '../slideshow';
import Screen1 from '../../assets/project-bonufo/screen1.jpeg';
import Screen2 from '../../assets/project-bonufo/screen2.jpeg';
import Screen3 from '../../assets/project-bonufo/screen3.jpeg';
import Screen4 from '../../assets/project-bonufo/screen4.jpeg';
import Screen5 from '../../assets/project-bonufo/screen5.jpeg';
import Screen6 from '../../assets/project-bonufo/screen6.jpeg';
import Screen7 from '../../assets/project-bonufo/screen7.jpeg';
import Screen8 from '../../assets/project-bonufo/screen8.jpeg';

function Project() {

  const projectInfo = {
    title: 'English Writing Response Platform - BONUFO',
    summary: 'A platform to enhance English writing skill as a learner or give feedback to others\' essay as a tutor',
    functions: [
      'Register for an account as a learner or a tutor',
      'Search questions with criteria (keyword, topic, question type, related exam)',
      'Write an essay responded to a question (Learner)',
      'Choose a marking scheme for an essay for particular exam preparation, e.g. IELTS, CELPIP (Learner)',
      'Give score and comment to an essay (Tutor)',
      'View saved questions in profile page',
      'View previous submission and the corresponding average score calculated (Learner)',
    ],
    technologies: [
      'React','TypeScript','HTML','CSS','Semantic UI','NodeJS','ExpressJS','JWT','MongoDB'
    ],
    demoLink: 'https://bonufo-react.vercel.app/',
    codeLink1: 'https://github.com/devfeefung79/bonufo-react',
    codeLink2: 'https://github.com/devfeefung79/bonufo-express',
  }

  const projectImage = [
    Screen1, Screen2, Screen3, Screen4, Screen5, Screen6, Screen7, Screen8
  ];

  return (
    <div className="project">
      <h1>Project</h1>
      <div className='card'>
        <div className='link'>
          <a href={projectInfo.demoLink} target="_blank">
            <button>Live Demo</button>
          </a>
          <a href={projectInfo.codeLink1} target="_blank">
            <button>Source Code (Frontend)</button>
          </a>
          <a href={projectInfo.codeLink2} target="_blank">
            <button>Source Code (Backend)</button>
          </a>
        </div>
        <h2>{projectInfo.title}</h2>
        <Slideshow images={projectImage}/>
        <p>{projectInfo.summary}</p>
        <div className='functions'>
          <p>Functions:</p>
          <ul>
            {projectInfo.functions.map((fn) => <li>{fn}</li>)}
          </ul>
        </div>
        <div className='technologies'>
          <p>Technologies used:</p>
          {projectInfo.technologies.map((tech) => <div className='chip'>{tech}</div>)}
        </div>
      </div>
    </div>
  );
}

export default Project;