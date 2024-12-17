import React from 'react';
import icon1 from '../assets/images/facebook.png';
import icon2 from '../assets/images/instagram.png';
import icon3 from '../assets/images/twitter.png';
import './footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <h1>Contact Us</h1>
                <p>Phone: +852-12345678</p>
                <p>Email: someone@example.com</p>

                <div className="icons">
                    <a href="https://www.facebook.com" target="_blank">
                        <img className="icon-item" src={icon1} alt="Facebook" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <img className="icon-item" src={icon2} alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <img className="icon-item" src={icon3} alt="Instagram" />
                    </a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;