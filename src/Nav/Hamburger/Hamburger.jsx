import React from 'react';
import "./Hamburger.css";

function Hamburger(props) {
    return (
        <div className="hamburger" onClick={props.toggleHamburger}>
            <div className={`burger ${props.hamburgerOpen ? 'burger1' : ''}`}></div>
            <div className={`burger burgerHover ${props.hamburgerOpen ? 'burger2' : ''}`}></div>
            <div className={`burger ${props.hamburgerOpen ? 'burger3' : ''}`}></div>
            
        </div>
    )
}

export default Hamburger
