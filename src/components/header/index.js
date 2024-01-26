import './index.css';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiEmail  } from '@mdi/js';
import Picture from '../../assets/signal-2024-01-23-113545_003.jpeg';

function Header() {
  return (
    <div className="header">
      <div className='picture'>
        <img src={Picture} alt='feena'/>
      </div>
      <div className='content'>
        <div>Hello, I am</div>
        <h1>FUNG, Tsz Ling (Feena)</h1>
        <p>Dedicated full-stack developer with 4 years of experience in IT industry with academic background in computing, information systems, data science and statistics. Skills include web development with React, Java & JavaScript programming, SQL, systems analysis and design, cloud computing in AWS & Azure. Easy-going, adaptable, eager to learn and love to take challenges.</p>
        <a href='mailto:feenafungftl@gmail.com'>
          <button aria-label="Email">
            <Icon path={mdiEmail} size={1}/>
            <span>Email</span>
          </button>
        </a>
        <a href='https://www.linkedin.com/in/feena-fung/' target='_blank'>
          <button aria-label="Linkedin">
            <Icon path={mdiLinkedin} size={1}/>
            <span>Linkedin</span>
          </button>
        </a>
        <a href='https://github.com/devfeefung79/' target='_blank'>
          <button aria-label="Github">
              <Icon path={mdiGithub} size={1}/>
              <span>Github</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
