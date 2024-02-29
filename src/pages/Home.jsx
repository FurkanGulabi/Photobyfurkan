import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import InstagramCards from '../components/InstagramCards';
import '../style.css'; // Stil dosyasını dahil edin
import { motion } from 'framer-motion';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [mediaItems, setMediaItems] = useState([]);

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleOpenModal = () => {
        setShowModal(true);
    };

    // API çağrısını localStorage'a kaydederek ve gerektiğinde çekerek yönetelim
    const key = import.meta.env.VITE_REACT_APP_API_KEY;
    const apiUrl = "https://graph.instagram.com/me/media?fields=thumbnail_url,media_type,media_url,username,permalink,timestamp,caption&access_token=" + key;

    useEffect(() => {
        const cachedMediaItems = localStorage.getItem('mediaItems');

        if (cachedMediaItems) {
            setMediaItems(JSON.parse(cachedMediaItems));
        } else {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    setMediaItems(data.data);
                    localStorage.setItem('mediaItems', JSON.stringify(data.data));
                });
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, transform: 'translateY(10px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            exit={{ opacity: 0, transform: 'translateY(10px)', transition: { duration: 0.1 } }}
        >
            <Container className="mt-4 pt-8">
                <div className="row" id="cardRow">
                    {mediaItems.map((item) => (
                        <InstagramCards key={item.id} media={item} url={item.media_url} caption={item.caption} />
                    ))}

                </div>
            </Container>
            {/* <Button variant="primary" className="contact-button" onClick={handleOpenModal}>
                İletişim Formu
            </Button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton className='bg-color-white'>
                    <Modal.Title>İletişim Formu</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-color-white'>
                    <ContactForm onClose={handleCloseModal} />
                </Modal.Body>
            </Modal> */}
        </motion.div>
    )
}

export default Home;
