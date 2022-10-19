import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

import email from '../../icons/email.png';
import location from '../../icons/location.png';
import phone from '../../icons/phone-call.png'

import './contact.scss';

const Contact = () =>{

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_v5qn1xw', 'template_bhwfv5j', formRef.current, 'r_E7slDdPuJpR6-5-')
        .then((result) => {
            setDone(true)
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

        return(
        <div className="contact">
            <div className="contact__bg"></div>

            <div className="contact__wrapper">
                <div className="contact__left">
                    <h2 className="contact__left-header">Let's discuss your project </h2>
                    <div className="contact__left-icon">
                        <img src={phone} alt="" />
                        <a href="tel:0964682487"
                        style={{'color': darkMode && '#fff'}}>096 46 82 487</a>
                    </div>
                    
                    <div className="contact__left-icon">
                        <img src={email} alt="" />
                        ikruzhynskyy@gmail.com
                    </div>

                    <div className="contact__left-icon">
                        <img src={location} alt="" />
                        Ivano-Frankivsk, Ivasyuka 19 st.
                    </div>
                
                </div>

                <div className="contact__right">
                    <p>
                        <b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Excepturi sit deserunt quisquam error eligendi numquam voluptatum veniam quas
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{'backgroundColor': darkMode && '#333', 'caretColor': darkMode && '#fff'}} type="text" placeholder='Name' name='user_name' />
                        <input style={{'backgroundColor': darkMode && '#333', 'caretColor': darkMode && '#fff'}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{'backgroundColor': darkMode && '#333', 'caretColor': darkMode && '#fff'}} type="email" placeholder='Email' name='user_email' />
                        <textarea style={{'backgroundColor': darkMode && '#333', 'caretColor': darkMode && '#fff'}} name="user_message" id="user_message" rows="5" placeholder='Message'></textarea>
                         <button>Submit</button>
                        {done && 'thank your'}
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contact;