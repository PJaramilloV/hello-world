import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

// EmailJS configuration
const sid        = import.meta.env.VITE_EJS_SERVICE_ID;
const secret     = import.meta.env.VITE_EJS_SERVICE_SECRET;
const templateId = import.meta.env.VITE_EJS_TEMPLATE_ID;

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setEmail(email.toLowerCase());

    setNameError(name === '');
    setEmailError(email === '' || !emailRegex.test(email));
    setMessageError(message === '');
    const valid = !(nameError || emailError || messageError);

    if (!sid || !secret || !templateId){
      setMessage(`Email Service is currently unavailable, please contact me through linked-in: https://www.linkedin.com/in/pablo-jaramillo-vesperinas/\nHere is your original message:\n${message}`)
    } else if (valid) {
      var templateParams = {
        name: name,
        email: email,
        message: message,
        time: new Date().toLocaleString(),
        title: `${name} would like to contact you`,
      };

      console.log(templateParams);
      emailjs.send(
        sid, 
        templateId, templateParams, 
        secret
      ).then(
        (response: { status: number; text: string; }) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessage(`Thank you for your message, ${name}! Check your email to verify it has reached me, if so, then I will get back to you as soon as possible!`)
        },
        (error: any) => {
          console.log('FAILED...', error);
          setMessage(`Sorry, there was an error sending your message [ERROR](${error.text}).\nPlease try again later.\n\nHere is your original message:\n${message}`);
        },
      );
      setName('');
      setEmail('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;