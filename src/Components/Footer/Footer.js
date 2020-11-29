import React from 'react';
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer(props) {
    return (
        <footer class="site-footer">
            <div class="container">
                <p class="copyright-text">Copyright &copy; 2020 Powered by <b>IEEE IAS ENIT SBC</b></p>
            </div>
            <div class="field">
                <a href="https://www.linkedin.com/company/ieee-enit-ias-student-branch-chapter" target="_blank" rel="noreferrer" className="sns-btn sns-btn--linked">
                    <LinkedInIcon style={{ color:"white"}}/>
                </a>	
                <a href="https://www.facebook.com/IAS.ENIT" target="_blank" rel="noreferrer" className="sns-btn sns-btn--facebook">
                    <FacebookIcon style={{ color:"white"}}/>
                </a>
                <a  href="https://www.instagram.com/ieee.ias.enit.sbc/" target="_blank" rel="noreferrer" className="sns-btn sns-btn--instagram">
                    <InstagramIcon style={{ color:"white"}}/>
                </a>
                <a href="https://ias-enit.ieee.tn/" target="_blank" rel="noreferrer" className="sns-btn sns-btn--siteweb">
                    <LanguageIcon style={{ color:"white"}}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;


