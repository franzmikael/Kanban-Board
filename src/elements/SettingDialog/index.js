import React from 'react';
import propTypes from 'prop-types';
import {Dropdown, DropdownButton} from 'react-bootstrap';

import More from 'assets/icons/more-horizontal.svg';
import ArrowRight from 'assets/icons/arrow-right.svg';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import Edit from 'assets/icons/edit-alt.svg';
import Trash from 'assets/icons/trash-alt.svg';

export default function SettingDialog({moveRightHandler, moveLeftHandler, editHandler, deleteHandler}) {
    return (
        <DropdownButton
            key={'end'}
            drop={'end'}
            variant={'secondary'}
            title={<img src={More} alt='...'/>}
        >
            <Dropdown.Item onClick={() => {moveRightHandler()}}>
                <img src={ArrowRight} alt='arrow right'/><span>Move Right</span>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => {moveLeftHandler()}}>
                <img src={ArrowLeft} alt='arrow left'/><span>Move Left</span>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => {editHandler()}}>
                <img src={Edit} alt='edit'/><span>Edit</span>
            </Dropdown.Item>
            <Dropdown.Item className='danger' onClick={() => {deleteHandler()}}>
                <img src={Trash} alt='delete'/><span>Delete</span>
            </Dropdown.Item>
        </DropdownButton>
    )
}

SettingDialog.propTypes = {
    moveRightHandler: propTypes.func,
    moveLeftHandler: propTypes.func,
    editHandler: propTypes.func,
    deleteHandler: propTypes.func
}