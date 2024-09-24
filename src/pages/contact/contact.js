import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import './style.css';
import { Link } from "react-router-dom";


function Contact() {
    return (
        <>
            <Header />

            <div className="container">
                <form action="https://api.staticforms.xyz/submit" method="post">
                    <h2 className="title-contact">Online Booking</h2>
                    <input className="first" name="name" type="text" placeholder="Full name" />
                    <input name="phone" type="number" placeholder="Cell phone" required />
                    <input name="email" type="email" placeholder="E-mail" />
                    <textarea name="mensagem" rows={4} placeholder="Enter your ckin and ckout date, or your questions and wait for us to contact you." required />

                    <Link to={'/Thanks'}>
                        <button>Contact us</button>
                    </Link>

                    <input type="hidden" name="accessKey" value="7af440f3-8373-4d73-9570-b3f94361fe80" />
                    <input type="hidden" name="redirectTo" value="http://localhost:3000/Thanks" />
                </form>
            </div>


            <Footer />
        </>
    )
}

export default Contact;