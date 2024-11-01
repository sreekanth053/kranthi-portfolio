// Contact.js
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7zj9o2d', 'template_n65p2kb', form.current, 'MS6kC4AriwmIg8V0-')
            .then(() => alert("Message sent successfully!"))
            .catch(() => alert("Failed to send the message. Please try again."));
        e.target.reset();
    };

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                {['name', 'email', 'mobile', 'subject'].map((field, idx) => (
                    <input key={idx} type="text" name={field} placeholder={`Enter Your ${field}`} required />
                ))}
                <textarea name="message" rows="6" placeholder="Enter your message here..." required></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
