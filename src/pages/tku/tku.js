
import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer";
import './tku.css';
import Logo from "../../assets/icons/Logo.jpg"
import { Link } from "react-router-dom";

function Thanks() {
    return (
        <>
            <div>
                <Header />

                <div id="container1">
                    <div id="thanks">
                        <h1>Thank you for contacting us!</h1>
                        <p>We'll get back to you soon!<br/> Keep an eye on your e-mail!</p>
                    </div>
                    <Link to={'/'}>
                        <img id="logo" src={Logo} alt="logo da empresa"/>
                    </Link>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Thanks;