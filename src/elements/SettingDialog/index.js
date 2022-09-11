import React from 'react';
import propTypes from 'prop-types';
import {Dropdown, DropdownButton} from 'react-bootstrap';

import More from '../../assets/icons/more-horizontal.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import Edit from '../../assets/icons/edit-alt.svg';
import Trash from '../../assets/icons/trash-alt.svg';

export default function SettingDialog({currentIndex, lastIndex, moveRightHandler, moveLeftHandler, editHandler, deleteHandler}) {
    return (
        <DropdownButton
            key={'end'}
            drop={'down'}
            variant={'secondary'}
            title={<img src={More} alt='...'/>}
        >
            {currentIndex+1 < lastIndex &&
                <Dropdown.Item onClick={() => {moveRightHandler()}}>
                    <img src={ArrowRight} alt='arrow right'/><span>Move Right</span>
                </Dropdown.Item>
            }
            {currentIndex-1 >= 0 &&
                <Dropdown.Item onClick={() => {moveLeftHandler()}}>
                    <img src={ArrowLeft} alt='arrow left'/><span>Move Left</span>
                </Dropdown.Item>
            }
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
    currentIndex: propTypes.number,
    lastIndex: propTypes.number,
    moveRightHandler: propTypes.func,
    moveLeftHandler: propTypes.func,
    editHandler: propTypes.func,
    deleteHandler: propTypes.func
}