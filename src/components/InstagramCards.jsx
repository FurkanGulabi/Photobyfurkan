import '/src/style.css'
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
const InstagramCards = (props) => {
    const [showModal, setShowModal] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <div className="col-md-4" style={{userSelect:"none"}}>
          <div className="card mb-4">
            <img loading="lazy" className="card-img-top" src={props.url} onClick={handleOpenModal} />
          </div>
          <Modal show={showModal} onHide={handleCloseModal} size={isMobile ? 'xl' : 'lg'} centered>
            <Modal.Body>
              <div className="text-center mb-3 custom-modal-content">
                <img src={props.url} alt={props.caption || "Instagram Fotoğrafı"} className="img-fluid" />
              </div>
              <div className="modal-caption">
                <p className={props.caption && props.caption.length > 36 ? "caption-small" : "caption"}>
                  {props.caption || "Açıklama yok"}
                </p>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
      
};

export default InstagramCards;
