import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      } else {
        setErrorMessage('Please fill in all fields')
      }
    };
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
    //   setEmail('');
    //   setName('');
    //   setMessage('');


    return (
     <section className='d-flex justify-content-center align-items-center text-center border'>
      <div className='d-flex container-lg'>
        <div className='display-2 text-center'>Contact Me!</div>
      </div>
      <div className='container-lg'>
        <div className='justify-content-center align-items-center p-4 m-4'>
        <form className="form">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Your Email"
          />
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Your Name"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Your Message"
          />
          <button className='btn rounded' type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
     </section>
    );
}

export default Contact;