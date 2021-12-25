import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

import logo from '../../NikkeiLogo.webp'
import cutlery from '../../ Images/cutlery.svg'
import Nav from '../../Nav/Nav.jsx';

import { IoIosArrowForward } from 'react-icons/io';
import { GrInstagram} from 'react-icons/gr';




function Home() {
    return (
        <div className="Home">
            <div className="landing-page">
                <Nav classname={'navHome'}/>
                <div className="Home_container"><p>	&ldquo; Step inside Nikkei Kitchen, a world where day blurs into night, <br></br> summer into winter, and food and drink are plenty &rdquo;</p>
                    <a href='https://www.thefork.de/?cc=56555-8ef&gclid=Cj0KCQiA_JWOBhDRARIsANymNObapWZTMGfaiqUYI-m1Lr6XBGjzmu_I-asGUH1no9NQ3PkF3tT-IrUaAqhLEALw_wcB&gclsrc=aw.ds' target='_blank'><button>RESERVE<IoIosArrowForward /></button>
                    </a>
                    
                </div>
            </div>
            <div className="Home_text">
                <div>
                    <h1>Welcome to Nikkei Kitchen</h1>
                    <p>Our new menus, conceived by Chef Michael Canepa and his culinary team, showcase ingredient led, Nikkei cuisine that is firmly rooted in the classics; bold, bright flavours are presented in skillfully executed dishes that echo nostalgia with a modern and local twist.</p>
                    <p>Open for lunch, Friday and Saturay & dinner everyday,  Nikkei Kitchen delivers an array of experiences to suit your individual mood and preferences.</p>
                </div>
                <div>
                    <div>
                        <h2>What Is Nikkei Cuisine?</h2>
                        <a href="https://www.instagram.com/nikkei.kitchen/" target="_blank">FOLLOW US<GrInstagram size={30} style={{marginLeft: '10px'}} /></a>
                    </div>
                    <p>Nikkei cuisine is an harmonious synthesis between the culinary tradition of Peru and that of Japan. A style that melted into a dish gives harmonies of colors, flavors and aromas with the best of the two countries, so different in appearance. Nikkei cuisine puts the delicacy and fantasy of the Japanese culinary tradition on the table with the strong, vibrant and spicy flavors of Peru</p>
                </div>
            </div>
            <img src={cutlery} />
          

        </div>
    )
}

export default Home
