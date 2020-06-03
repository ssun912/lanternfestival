import React from 'react';
import Fade from 'react-reveal';

const Footer = () => {
    return (
        <footer>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">The Lantern Festival</div>
                <div className="footer_copyright">
                    NYC Lantern Festival @{(new Date(Date.now())).getFullYear()}. All Rights Reserved.
                    <p>Photo by Lucas Li | Web power by Sally Sun</p>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;