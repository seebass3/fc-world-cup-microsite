import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import PropTypes from "prop-types";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999 !important;
`;

const ModalWrapper = styled.div`
  width: 75vw;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: transparent;
  color: #000;
  position: relative;
  z-index: 9999 !important;
  border-radius: 10px;
  @media (max-width: 1024px) {
    width: 90vw;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: -12px;
  right: -12px;
  width: 32px;
  height: 32px;
  padding: 2px;
  z-index: 9999 !important;
  border-radius: 20px;
  background: #fff;
`;

export const Modal = ({ showModal, setShowModal, modalContent }) => {

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

    const modalRef = useRef()
    
    const animation = useSpring ({
        config: {
            duration: 500
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `opacity(0%)` : `opacity(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    };

    const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModal) {
            setShowModal(false);
          }
        },
        [setShowModal, showModal]
      );
    
      useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );

    return (
        <>
        {showModal ? (
            <Background ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                      <div className="content">{modalContent}</div>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal (prev => !prev)} />
                </ModalWrapper>
                </animated.div>
            </Background>
        ) : null }
        </>
    )
}

Modal.propTypes = {
  modalContent: PropTypes.element,
};