import React from 'react';
import logo from '../ Images/NikkeiLogo.webp';
import { GrInstagram, GrFacebook } from 'react-icons/gr';

import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <img src={logo} />
            <div>
                <div>
                    <p>Nikkei Kitchen</p> <p>
                    Herzogstraße 88 <br /> 80796 München <br /> Deutschland</p>
                    <p>betriebsleitung@nikkei-kitchen.com </p>
                    <p> 0176 88479259</p> 
                    <p> www.nikkei.kitchen</p> 
                </div>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Herzogstrasse%2086%2080796%20Munich&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
                <div>
                    <p>FOLLOW US</p>
                    <a href="https://www.facebook.com/Nikkei.Kitchen1/" target="_blank"><GrFacebook /> Facebook</a>&nbsp;&nbsp;
                    <a href="https://www.instagram.com/nikkei.kitchen/" target="_blank"><GrInstagram /> Instagram</a>
                </div>
            </div>
            <p>	&copy; Nikkei Kitchen 2022</p>
           
        </div>
    )
}

export default Footer
