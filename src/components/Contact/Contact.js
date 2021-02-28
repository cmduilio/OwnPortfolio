import React, {useState} from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");

    const validate = (e) => {
        console.log(email);
        sendEmail(e);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_ngq6bxl", "template_6i2c8v4",
            e.target, "user_XgpNpFqOQ4uVoZv8Cw6Ot")
        .then((result) => {
            console.log(result.text);
            setMessage("");
            setEmail("");
            setCompany("");
            setName("");
            window.alert("Your message has been sent!");
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <form className={"contact-form"} onSubmit={e => validate(e)}>
            <input className={"contact-input"} type={"text"}
                   placeholder={"your name"}
                   name={"from_name"}
                   value={name}
                   onChange={event => setName(event.target.value)}/>
            <input className={"contact-input"} type={"text"}
                   placeholder={"company name"}
                   name={"company_name"}
                   value={company}
                   onChange={event => setCompany(event.target.value)}/>
            <input className={"contact-input"} type={"email"}
                   placeholder={"contact email"}
                   name={"reply_to"}
                   value={email}
                   onChange={event => setEmail(event.target.value)}/>
            <textarea className={"contact-input"}
                   placeholder={"your message"}
                   name={"message"}
                   value={message}
                   onChange={event => setMessage(event.target.value)}/>
            <input className={"contact-submit"} type={"submit"} value={"Send"}/>
        </form>
    )
}

export default Contact;