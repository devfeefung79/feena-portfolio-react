import './index.css';

import { mdiEmail, mdiFile, mdiGithub, mdiLinkedin } from '@mdi/js';
import React, { useState } from 'react';
import { contactInfo } from '../../data/data';
import ContactMeForm from '../contact-me-form';
import CustomLink from '../custom/customLink';

const ContactMe = () => {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleShowSuccessMessage = () => {
        setShowSuccessMessage(true);
    }

    return (
        <div id="contact" className="contact-me">
            <h2>Contact Me.</h2> 
            { showSuccessMessage ? 
                <h3>Thanks for your message. We will be in touch soon!</h3>
                : <h3>Send me a message!</h3> }
            <div className="container">
                <ContactMeForm handleShowSuccessMessage={handleShowSuccessMessage}/>
                <div className="links">
                    <CustomLink url={contactInfo.resume} text="resume" icon={mdiFile} isOpenNewTab/>
                    <CustomLink url={`mailto:${contactInfo.email}`} text={contactInfo.email} icon={mdiEmail} isOpenNewTab/>
                    <CustomLink url={contactInfo.linkedin} text="linkedin.com/in/feena-fung" icon={mdiLinkedin} isOpenNewTab/>
                    <CustomLink url={contactInfo.github} text="github.com/devfeefung79" icon={mdiGithub} isOpenNewTab/>
                </div>
            </div>
            <br/>
            <br/>
            <div className="footer">
                <span>Copyright © 2025. Build with React and JavaScript.</span>
            </div>
        </div>
    );
}

export default ContactMe;