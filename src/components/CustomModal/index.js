import React from 'react';
import propTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'elements';

import Xicon from 'assets/icons/x.svg';

export default function CustomModal(props) {
    return (
        <Modal show={props.visible} onHide={() => {props.setVisible(false)}}>
            <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
                <Button className='modal-close' icon={Xicon} isPlain onClick={() => {props.setVisible(false)}}/>
            </Modal.Header>
                <Modal.Body>{props.isDeleteModal && props.deleteText}</Modal.Body>
            <Modal.Footer>
                <Button isOutline onClick={() => {props.setVisible(false)}}>
                    Cancel
                </Button>
                <Button isPrimary onClick={() => {props.setVisible(false)}}>
                    {props.btnName || 'Save'}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

CustomModal.propTypes = {
    visible: propTypes.bool,
    setVisible: propTypes.func,
    title: propTypes.string,
    form: propTypes.array,
    isDeleteModal: propTypes.bool,
    deleteText: propTypes.string,
    btnName: propTypes.string
}