import React from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <form action="" className={classes.Form}>
                <TextField 
                color="secondary"
                margin="normal" 
                variant="outlined" 
                label="Name"
                size="small"    
            ></TextField>

            <TextField 
                color="secondary"
                margin="normal" 
                variant="outlined" 
                label="Email"
                size="small"
            ></TextField>

            <TextField 
            color="secondary"
            margin="normal" 
            multiline={true} 
            variant="outlined" 
            label="Message"
            size="small"
            rows="6"
            style={{marginBottom: '20px'}}
            ></TextField>
            <button className={classes.SubmitBtn}>Send</button>
            
        </form>
        
    )
}

export default ContactForm;