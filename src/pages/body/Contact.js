import React from 'react'
import ContactForm from './components/ContactForm'

const Contact = () => {
    return (
        <div className="contact_wrapper" id="contact">
            <form>
                <div className="segment">
                    <h1>Contact Me</h1>
                </div>
                <label>
                    <input type="text" placeholder="Your Name" />
                </label>
                <label>
                    <input type="email" placeholder="Your Email" />
                </label>
                <label>
                    <textarea cols={50} rows={10} />
                </label>
                <button className="red" type="button"><i className="icon ion-md-lock" /> Log in</button>
                <div className="segment">
                    <button className="unit" type="button"><i className="icon ion-md-arrow-back" /></button>
                    <button className="unit" type="button"><i className="icon ion-md-bookmark" /></button>
                    <button className="unit" type="button"><i className="icon ion-md-settings" /></button>
                </div>
            </form>
        </div>
    );
}

export default Contact
