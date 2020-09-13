import React from 'react';
import classes from './Contact.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactImg from '../../assets/img/Contact_image.png';

const Contact = () => {
    return(
        <div title="contact" id="contact" className={classes.Contact}>
            <h5>Contact</h5>
            <img className={classes.ContactImg} src={ContactImg} alt="Contact image"/>
            <div className={classes.ContactBody}>
                <div className={classes.Side}>
                    <p>
                        Let us know about any 
                        suggestions, enquiries
                        or just to say hi
                    </p>
                </div>
                <div className={classes.Divider}>

                </div>
                <div className={classes.Form}>
                    <ContactForm></ContactForm>
                </div>
            </div>
            
        </div>    
    )
}

export default Contact;