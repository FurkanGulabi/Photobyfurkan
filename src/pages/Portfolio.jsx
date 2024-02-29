import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import pp from '../photos/pp.jpg';
import '../style.css';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.div
      className='container p-5 mb-3 portfolio-margin-top border rounded-4 d-flex flex-column align-items-center'
      style={{ backgroundColor: "rgba(255,255,255,0.04)", boxShadow: "0 0 8px 0.01px white , inset 0 0 8px 0.01px white", backdropFilter: "blur(15px)" }}
      initial={{ opacity: 0, transform: 'translateY(10px)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
      exit={{ opacity: 0, transform: 'translateY(10px)', transition: { duration: 0.1 } }}

    >
      <img
        src={pp}
        alt='Profile'
        className='rounded-circle mb-4 pp-image'
      />
      <h2 className='mb-2 h1 text-center' style={{ fontSize: '59.1px', color: 'white', fontWeight: "700", letterSpacing: "2px" }}>Furkan Gülabi</h2>
      <p className='font-weight-bold h4 mb-4' style={{ fontSize: '24px', color: "gray" }}>Photographer</p>
      <div className='contact-section'>
        <div className="phone box">
          <a href="mailto:furkan456@outlook.com"><FontAwesomeIcon icon={faEnvelope} className='contact-icon' size='2x' /></a>
        </div>
        <div className="mail box">
          <a href="https://wa.me/905447206671" target='_blank'><FontAwesomeIcon icon={faWhatsapp} className='contact-icon' size='2x' /></a>
        </div>
        <div className="instagram box">
          <a href="https://www.instagram.com/photobyfurkan/" target='_blank'><FontAwesomeIcon icon={faInstagram} className='contact-icon' size='2x' /></a>
        </div>
      </div>
      <div>
        <p className='text-start' style={{ color: "gray", fontWeight: "600" }}>
          <br />
          TR / Istanbul, Turkey
          <br />
          📸 Urban, Architecture, Travel, Animal
          <br />
          📷 Canon 650D, 18-55 IS, 50mm F1.8 STM
          <br />
          All photos shot by me.
        </p>
      </div>
    </motion.div>
  )
}

export default Portfolio
