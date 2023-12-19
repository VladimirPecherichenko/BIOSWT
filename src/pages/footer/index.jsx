import React from "react";
import './style.scss';
import { Link } from "react-router-dom";
import classNames from 'classnames'

export const Footer = () => {
    window.scrollTo(0,0)

    return (
        <React.Fragment>
  <div className="footer">
        
    <div className="footer_logo">
        <div><Link to={'/'}><img src={'./assets/logo.png'}/></Link></div>
    </div>

    <div className={'footer__menu'}>
            <div className={'footer__menu1'}><img src={'./assets/ph_phone-call.png'}/></div>
            <div className={'footer__menu2'}>123-456-789</div>
            <div className={'footer__menu3'}><img src={'./assets/bi_geo-alt.png'}/></div>
            <div className={'footer__menu4'}>Барнаул</div>
        </div>
</div>


  

    </React.Fragment>
    );
    }
export default Footer;