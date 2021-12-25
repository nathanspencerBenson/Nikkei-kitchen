import React, { useState } from 'react';
import './Contact.css';
import { GrInstagram, GrFacebook } from 'react-icons/gr';
import mail from '../../ Images/mail.svg';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail} from 'react-icons/hi';

import Nav from '../../Nav/Nav';

function Contact() {
   

    return (
        <div className="Contact" id="contact">
            <div className="background-stripe"></div>
            <Nav classname={'nav-Contact'} />
            <h1 className="contact__title">Get In Touch</h1>
            <h2><div></div>CONTACT</h2>
            <img className="image-mail" src={mail}/>
            <div className="contact__details">
                <div>
                    <form>
                        <h3>Send us a Message</h3>
                        <div>
                            <div className="form_input-label">
                                <label for="name">NAME</label>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="form_input-label">
                                <label for="email">EMAIL</label>
                                <input type="email" placeholder="Email  " />
                            </div>
                        </div>
                        <div className="form_input-label">
                            <label for="subject">SUBJECT</label>
                            <input type="text" placeholder="Subject" style={{width: '300px'}} />
                        </div>
                        <div className="form_input-label">
                            <label for ="message">MESSAGE</label>
                            <textarea rows="10" cols="50" placeholder="Message" />
                        </div>
                        <button> Send Message</button>
                    </form>
                  
                  </div>
                <div>
                    <h3>Address</h3>
                    <p>Herzogstraße 88<br />
                        80796 München
                    </p>
                    <h3>Contact</h3>
                    <p><BsFillTelephoneFill />0176 88479259</p>
                    <p><HiOutlineMail />betriebsleitung@nikkei-kitchen.com</p>
                    <h3>Social Media</h3>
                    <a href="https://www.instagram.com/nikkei.kitchen/" target="_blank"><GrInstagram /> Instagram</a>
                    &nbsp;&nbsp;
                    <a href="https://www.facebook.com/Nikkei.Kitchen1/" target="_blank"><GrFacebook /> Facebook</a>
                </div>
                

            </div>
        </div>


            )
}

export default Contact
