import './index.css';

import { mdiEmail, mdiFile, mdiGithub, mdiLinkedin } from '@mdi/js';
import { contactInfo } from '../../data/data';
import CustomLink from '../custom/customLink';

const ContactMe = () => {
    return (
        <div className="contact-me">
            <h2>Contact Me.</h2> 
            <CustomLink url={contactInfo.resume} text="resume" icon={mdiFile} />
            <CustomLink url={`mailto:${contactInfo.email}`} text={contactInfo.email} icon={mdiEmail} />
            <CustomLink url={contactInfo.linkedin} text="linkedin.com/in/feena-fung" icon={mdiLinkedin} />
            <CustomLink url={contactInfo.github} text="github.com/devfeefung79" icon={mdiGithub} />
        </div>
    );
}

export default ContactMe;