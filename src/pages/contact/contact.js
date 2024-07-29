import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import './style.css';


function Contact() {
    return (
        <>
            <Header />

            <div className="container">
                <form>
                    <h2 className="title-contact">Online Booking</h2>
                    <input className="first" name="name" type="text" placeholder="Full name"/>
                    <input name="phone" type="number" placeholder="Cell phone" required />
                    <input name="email" type="email" placeholder="E-mail"/>
                    <textarea name="mensagem" rows={4} placeholder="Enter your arrival and departure date and/or your questions and wait for us to contact you." required/>
                    <button type="button">Check availability</button>
                </form>
            </div>


            <Footer />
        </>
    )
}

export default Contact;