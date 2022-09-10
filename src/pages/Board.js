import React, { useEffect, useState } from 'react';
import { Header, Todo } from 'components';
import { CustomModal } from 'elements';
import { getTodos, createTodoItem } from 'services';

export default function Board() {
	const [listTodos, setListTodos] = useState([]);
	const [selectedTodo, setSelectedTodo] = useState({});
	const [selectedItem, setSelectedItem] = useState({});
    const [visibleCreateItemModal, setVisibleCreateItemModal] = useState(false);
    const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
	
	useEffect(() => {
		getTodos(setListTodos);
	}, [])

    const createItemForm = [
        {
            type: 'text',
            name: 'name',
            label: 'Task Name',
            placeholder: 'Type your Task'
        }, {
            type: 'text',
            name: 'progress_percentage',
            label: 'Progress',
            placeholder: '70%',
            style: {width: '40%'}
        }
    ]

    function handleCreateItemForm(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const req = {};
        form.forEach((value, key) => {
            if (key === 'progress_percentage') {
                req[key] = parseInt(value);
            } else {
                return req[key] = value}
            }
        );
        createTodoItem(selectedTodo.id, req, selectedTodo.setfunc);
    }

	function handleDeleteItemForm(event) {
        event.preventDefault();
		console.log(selectedItem);
	}

	return (
		<>
			<Header setListTodos={setListTodos} />
			<section className="container p-4">
				<div className="row px-3">
					{listTodos.map((todo) => {
					return (
						<Todo
						key={todo.id}
						id={todo.id}
						title={todo.title}
						description={todo.description}
						setSelectedTodo={setSelectedTodo}
						setSelectedItem={setSelectedItem}
						setVisibleCreateItemModal={setVisibleCreateItemModal}
						setVisibleDeleteModal={setVisibleDeleteModal}
						/>
					)
					})}
				</div>
			</section>
					
            <CustomModal
                title='Create Task'
                form={createItemForm}
                formHandler={handleCreateItemForm}
				btnName='Save Task'
                visible={visibleCreateItemModal}
                setVisible={setVisibleCreateItemModal}
            />

			<CustomModal
				title='Delete Task'
				isDeleteModal
				deleteText="Are you sure want to delete this task? your action can't be reverted."
				formHandler={handleDeleteItemForm}
				visible={visibleDeleteModal}
				setVisible={setVisibleDeleteModal}
				selectedItem={selectedItem}
			/>
		</>
	)
}
