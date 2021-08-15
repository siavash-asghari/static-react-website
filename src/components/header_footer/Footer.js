import React from 'react'
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <footer className="bck_blue">
            <Fade delay={500}>
                <div>کنسرت چاووشی</div>
                <div className="footer_copyright">
                    تمامی حقوق این وبسایت محفوظ میباشد.
                </div>
            </Fade>
        </footer>
    )
}

export default Footer;
