import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
export function Footer(){
    return (
        <footer className='footerM'>
                <div className='footer1 container-fluid p-5'>
                <div className="row m-1">
                  <div className='col py-2'>
                   <p className='footer-p px-5 m-5'>Ecuabonsai</p> 
                   
                  </div>
                  <div className='col py-1'>
                    <div className='socialmedia-text  p-1 row'>
                   <p className='footer-p p-2 '>Encuentranos también en nuestras redes sociales:</p>
                   </div>
                   <div className='socialmedia  p-1 row'>
                    <div className="col p-1 twitter d-flex  justify-content-center"> 
                    <a href="https://www.facebook.com/ecuabonsai" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="display-4" icon={faFacebook} /></a>
                    </div>
                    <div className="col p-1 youtube d-flex justify-content-center"> 
                    <a href="https://www.instagram.com/ecuabonsai/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="display-4" icon={faInstagram} /></a>   
                    </div>
                    <div className="col p-1 github d-flex justify-content-center"> 
                    <a href="https://www.tiktok.com/@ecuabonsai" target="_blank" rel="noreferrer" >
                    <FontAwesomeIcon className="display-4" icon={faTiktok} /></a>    
                    </div>
                    </div>

                  </div>
                  <div className='col'>
                    <p className='footer-p px-5 m-5'>Copyright © 2023 | Ecuabonsai</p> 
                  </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;