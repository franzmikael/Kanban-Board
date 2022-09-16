import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTodo } from '../../store/board';
import { Button, CustomModal } from '../../elements';
import Plus from '../../assets/icons/plus.svg';
import { createTodo } from '../../services';

export default function Header(props) {
	const dispatch = useDispatch();

    const [visibleCreateTodoModal, setVisibleCreateTodoModal] = useState(false);

	const createTodoForm = [
		{
			type: 'text',
			name: 'title',
			label: 'Group Title',
			placeholder: 'Group Task 1'
		}, {
			type: 'text',
			name: 'description',
			label: 'Description',
			placeholder: 'June - December'
		}
	]

	function handleForm(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const req = {};
        form.forEach((value, key) => {
            return req[key] = value}
        );
        dispatch(createTodo(req, setTodo));
    }

	return (
		<>
			<header className="spacing-sm">
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light">
				<span className='brand-text'>Product Roadmap</span>
				<Button isPrimary isCompact icon={Plus} onClick={() => {setVisibleCreateTodoModal(true)}}>Add New Group</Button>
				</nav>
			</div>
			</header>
			
			<CustomModal
				title='Create Group'
				form={createTodoForm}
                formHandler={handleForm}
				btnName='Save Group'
				visible={visibleCreateTodoModal}
				setVisible={setVisibleCreateTodoModal}
			/>
		</>
	)
}
