import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <section className='contact-page' id='Contact'>
        <div class="contact-form">
            <h2>Contact Me!</h2>
            <form action="#" method="post">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div class="form-group">
                    <label for="mobile-number">Your mobile number</label>
                    <input type="number" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="email">Your Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>
  )
}
