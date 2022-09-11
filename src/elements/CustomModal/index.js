import React from 'react';
import propTypes from 'prop-types';
import { Form, Modal } from 'react-bootstrap';
import { Button, CustomForm} from '../../elements';

import Xicon from '../../assets/icons/x.svg';
import Exclamation from './src/assets/icons/exclamation.svg';

export default function CustomModal({visible, setVisible, title, form, formHandler, isDeleteModal, deleteText, btnName, formValue}) {

    let titleType = isDeleteModal ? 
        (<><img src={Exclamation} alt="!" />{title}</>) : title;
    let buttonColor = isDeleteModal ? 
        {isDanger: true} : {isPrimary: true};
    let buttonText = isDeleteModal ? 
        'Delete' : btnName;

    return (
        <Modal show={visible} onHide={() => {setVisible(false)}}>
            <Modal.Header>
                <Modal.Title>{titleType}</Modal.Title>
                <Button className='modal-close' icon={Xicon} isPlain onClick={() => {setVisible(false)}}/>
            </Modal.Header>
            <Form onSubmit={formHandler}>
                <Modal.Body>
                    {(isDeleteModal && deleteText) || <CustomForm formData={form} defaultValue={formValue} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button isOutline onClick={() => {setVisible(false)}}>
                        Cancel
                    </Button>
                    <Button {...buttonColor} type='submit' onClick={() => {setVisible(false)}}>
                        {buttonText || 'Save'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

CustomModal.propTypes = {
    visible: propTypes.bool,
    setVisible: propTypes.func,
    title: propTypes.string,
    form: propTypes.array,
    formHandler: propTypes.func,
    isFormModal: propTypes.bool,
    isDeleteModal: propTypes.bool,
    deleteText: propTypes.string,
    btnName: propTypes.string,
    formValue: propTypes.object
}