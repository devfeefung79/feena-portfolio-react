import { mdiEmail, mdiFile, mdiGithub, mdiLinkedin } from '@mdi/js';
import Icon from '@mdi/react';
import { useEffect, useState } from "react";
import { contactInfo } from '../../data/data';

import './custom.css';
  
  const VerticalNavBar = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleDownloadResume = () => {
      const resumeFileName = contactInfo.resume;
      const resumeFilePath = `${resumeFileName}`;
  
      const downloadLink = document.createElement("a");
      downloadLink.href = resumeFilePath;
      downloadLink.download = resumeFileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    return (
        <nav className={`vertical-navbar ${isVisible ? "show" : ""}`}>
            <ul>
                <li key='vertical-navbar-github'>
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiGithub} size={1} />
                    </a>
                </li>
                <li key='vertical-navbar-linkedin'>
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiLinkedin} size={1} />
                    </a>
                </li>
                <li key='vertical-navbar-email'>
                    <a href={`mailto:${contactInfo.email}`} target="_blank" rel="noopener noreferrer">
                        <Icon path={mdiEmail} size={1} />
                    </a>
                </li>
                <li key='vertical-navbar-resume'>
                    <a href="#" rel="noopener noreferrer" onClick={handleDownloadResume} >
                        <Icon path={mdiFile} size={1}/>
                    </a>
                </li>
            </ul>
        </nav>
 )};
  
  export default VerticalNavBar;