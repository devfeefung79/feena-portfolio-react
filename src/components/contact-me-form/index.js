import './index.css';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import CustomButton from '../custom/customButton';

const ContactMeForm = (props) => {
    
    const formRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = () => {
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAIL_JS_SERVICE_ID, 
                process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, 
                formRef.current,
                process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setIsFormSubmitted(true);
                    props.handleShowSuccessMessage();
                },
                (error) => {
                    console.log("FAILED...", error);
                }
            );
    };

    const validateForm = (e) => {
        e.preventDefault();

        let checkFormErrors = {
            name: '',
            email: '',
            message: ''
        };
        let isFormValid = true;

        if (name === '') {
            checkFormErrors.name = 'Name is required';
            isFormValid = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            checkFormErrors.email = 'Email is invalid';
            isFormValid = false;
        }
        if (email === '') {
            checkFormErrors.email = 'Email is required';
            isFormValid = false;
        }
        if (message === '') {
            checkFormErrors.message = 'Message is required';
            isFormValid = false;
        }

        if (!isFormValid) {
            setFormErrors({...formErrors, ...checkFormErrors});
            return;
        }

        // pass form validation, clear errors and submit form
        setFormErrors({...formErrors, name: '', email: '', message: ''});
        handleSubmit();
    };

    return (
        <form ref={formRef} className="contact-me-form">
            <div className={`form-field${formErrors.name ? ' error' : ''}`}>
                <label className="form-label">Name</label>
                <input className="form-input" type="text" name="from_name" value={name} onChange={e => setName(e.target.value)} disabled={isFormSubmitted}/>
                <span className="form-error">{formErrors.name}</span>
            </div>
            <div className={`form-field${formErrors.email ? ' error' : ''}`}>
                <label className="form-label">Email</label>
                <input className="form-input" type="email" name="reply_to" value={email} onChange={e => setEmail(e.target.value)} disabled={isFormSubmitted}/>
                <span className="form-error">{formErrors.email}</span>
            </div>
            <div className={`form-field${formErrors.message ? ' error' : ''}`}>
                <label className="form-label">Message</label>
                <textarea className="form-textarea" name="message" value={message} onChange={e => setMessage(e.target.value)} disabled={isFormSubmitted}/>
                <span className="form-error">{formErrors.message}</span>
            </div>
            <CustomButton type="submit" text="Submit" onClick={validateForm} disabled={isFormSubmitted}/>
        </form>
    );
};

export default ContactMeForm;
