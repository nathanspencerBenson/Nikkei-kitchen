import { React, useState } from 'react';
import { Link } from "react-router-dom";
import Hamburger from './Hamburger/Hamburger';
import "./Nav.css";
import Logo from '../NikkeiLogo.webp';
import sideMenuImg from '../HomePage8.jpeg';

import { GrInstagram, GrFacebook } from 'react-icons/gr';

function Nav({ classname }) {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <nav className={classname}>
            <img src={Logo} />
            <div className="nav-buttons">
                <Link to="/menu"><button>MENU</button></Link>
                <a href='https://www.thefork.de/?cc=56555-8ef&gclid=Cj0KCQiA_JWOBhDRARIsANymNObapWZTMGfaiqUYI-m1Lr6XBGjzmu_I-asGUH1no9NQ3PkF3tT-IrUaAqhLEALw_wcB&gclsrc=aw.ds' target='_blank'><button>RESERVE</button></a>
            </div>
            <Hamburger hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger} />
            <div className={`side-menu ${!hamburgerOpen ? 'hidden' : ''}`}>
                <img src={sideMenuImg}></img>
                <ul className={'menu'}>
                    <li onClick={toggleHamburger}>
                        <Link to="/">HOME</Link>
                    </li>
                    <li onClick={toggleHamburger}>
                        <Link to="/menu">MENU</Link>
                    </li>
                    <li onClick={toggleHamburger}>
                        <Link to="/delivery">DELIVERY</Link>
                    </li>
                    <li onClick={toggleHamburger}>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <li onClick={toggleHamburger}>
                    <a href='https://www.thefork.de/?cc=56555-8ef&gclid=Cj0KCQiA_JWOBhDRARIsANymNObapWZTMGfaiqUYI-m1Lr6XBGjzmu_I-asGUH1no9NQ3PkF3tT-IrUaAqhLEALw_wcB&gclsrc=aw.ds' target='_blank'>RESERVE</a>
                    </li>

                    <div className="socialmedia-links">
                        <a href="https://www.instagram.com/nikkei.kitchen/" target="_blank"><GrInstagram size={30} /></a>
                        <a href="https://www.facebook.com/Nikkei.Kitchen1/" target="_blank"><GrFacebook size={30} /></a>
                    </div>
                    <div>
                        <p>Nikkei Kitchen <br />Herzogstraße 88 <br /> 80796 München <br /> Deutschland</p>
                        <p>betriebsleitung@nikkei-kitchen.com <br /> 0176 88479259 <br /> www.nikkei.kitchen</p>
                    </div>

                </ul>
            </div>



        </nav>
    )
}

export default Nav
