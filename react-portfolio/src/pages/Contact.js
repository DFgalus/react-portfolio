import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sentEmail, setEmailSent] = useState(false);

    return (
        <div id='contact-form'>
            <input type='text' placeholder='Your name' />
            <input type='email' placeholder='Your email' />
            <textarea placeholder='Your message'></textarea>
            <button>Send Message</button>
            <span></span>
        </div>
    )
}