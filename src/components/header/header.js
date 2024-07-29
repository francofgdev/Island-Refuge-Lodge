import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/icons/Logo.jpg'

function Header() {

    return (
        <header>
            <img id="logo" src={Logo} />
            <nav>
                <ul>
                    <Link className="link" to={'/'}>
                        <li>HOME</li>
                    </Link>
                    <Link className="link" to={'/Contact'} target="blank">
                        <li>CONTACTS</li>
                    </Link>
                    <Link className="link" to={'/Photos'} target="blank">
                        <li>PHOTOS</li>
                    </Link >
                    <Link className="link" to={'/Comments'} target="blank">
                        <li>COMMENTS</li>
                    </Link >
                </ul>
            </nav>
        </header>
    )
}

export default Header;