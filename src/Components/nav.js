import React, { useState } from 'react';
import "../Styles/Nav.css";
import logo from "../Images/Logonetflix.png"
import avatar from "../Images/Profile.jpeg"
import { useEffect } from 'react/cjs/react.development';


function Nav() {

    const [navShow, handleNavShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleNavShow(true);
            }
            else {
                handleNavShow(false);
            };

            return (() => {
                window.removeEventListener("scroll");
            })
        })
    }, [])

    return <div className={`nav ${navShow && "navBlack"}`}>
        <img
            className='navLogo'
            src={logo}
            alt="Netflix Logo"
        ></img>

        <img
            className='navAvatar'
            src={avatar}
            alt="Avatar"
        ></img>

    </div >;
}

export default Nav;
