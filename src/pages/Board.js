import React, { useEffect, useState } from 'react';
import { Header, Todo } from 'components';
import { CustomModal } from 'elements';
import { getTodos, createTodoItem, updateTodoItem, moveTodoItem, deleteTodoItem } from 'services';

export default function Board() {
	const [listTodos, setListTodos] = useState([]);
	const [selectedTodo, setSelectedTodo] = useState({});
	const [selectedItem, setSelectedItem] = useState({});
    const [visibleCreateItemModal, setVisibleCreateItemModal] = useState(false);
    const [visibleEditModal, setVisibleEditModal] = useState(false);
    const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
	
	useEffect(() => {
		getTodos(setListTodos);
	}, [])

    const itemForm = [
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
        createTodoItem(selectedTodo.id, req, setListTodos);
    }

	function handleEditItemForm(event) {
		event.preventDefault();
        const form = new FormData(event.target);
        const req = {target_todo_id: selectedItem.todo_id};
        form.forEach((value, key) => {
            if (key === 'progress_percentage') {
                req[key] = parseInt(value);
            } else {
                return req[key] = value}
            }
        );
		updateTodoItem(selectedItem.todo_id, selectedItem.id, req, setListTodos);
	}

	function handleDeleteItemForm(event) {
        event.preventDefault();
        deleteTodoItem(selectedItem.todo_id, selectedItem.id, setListTodos);
	}

	function handleMoveRight(item) {
		const todosIds = listTodos.map(todo => {return todo.id});
		const current = todosIds.indexOf(item.todo_id);
		const next = current+1;

		if(next < todosIds.length) {
			const req = {
				target_todo_id: todosIds[next],
				name: item.name,
				progress_percentage: item.progress_percentage
			};
			moveTodoItem(item.todo_id, item.id, req, setListTodos);
		}
	}

	function handleMoveLeft(item) {
		const todosIds = listTodos.map(todo => {return todo.id});
		const current = todosIds.indexOf(item.todo_id);
		const prev = current-1;

		if(prev >= 0) {
			const req = {
				target_todo_id: todosIds[prev],
				name: item.name,
				progress_percentage: item.progress_percentage
			};
			moveTodoItem(item.todo_id, item.id, req, setListTodos);
		}
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
							items={todo?.items}
							setSelectedTodo={setSelectedTodo}
							setSelectedItem={setSelectedItem}
							setVisibleCreateItemModal={setVisibleCreateItemModal}
							setVisibleEditModal={setVisibleEditModal}
							setVisibleDeleteModal={setVisibleDeleteModal}
							handleMoveRight={handleMoveRight}
							handleMoveLeft={handleMoveLeft}
							/>
						)
					})}
				</div>
			</section>
					
            <CustomModal
                title='Create Task'
                form={itemForm}
                formHandler={handleCreateItemForm}
				btnName='Save Task'
                visible={visibleCreateItemModal}
                setVisible={setVisibleCreateItemModal}
            />
					
			<CustomModal
                title='Edit Task'
                form={itemForm}
				formValue={selectedItem}
                formHandler={handleEditItemForm}
				btnName='Save Task'
                visible={visibleEditModal}
                setVisible={setVisibleEditModal}
            />

			<CustomModal
				title='Delete Task'
				isDeleteModal
				deleteText="Are you sure want to delete this task? your action can't be reverted."
				formHandler={handleDeleteItemForm}
				visible={visibleDeleteModal}
				setVisible={setVisibleDeleteModal}
			/>
		</>
	)
}
