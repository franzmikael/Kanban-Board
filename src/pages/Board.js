import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setList, setItem, updateItem, moveItem, deleteItem } from '../store/board';
import { Header, Todo } from '../components';
import { CustomModal } from '../elements';
import { getAllTodos, createTodoItem, updateTodoItem, moveTodoItem, deleteTodoItem } from '../services';

export default function Board() {
	const todoList = useSelector(state => state.board.todoList);
	const todoIds = useSelector(state => state.board.todoIds);
	const selected = useSelector(state => state.board.selected);
	const dispatch = useDispatch();

    const [visibleCreateItemModal, setVisibleCreateItemModal] = useState(false);
    const [visibleEditModal, setVisibleEditModal] = useState(false);
    const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
	
	useEffect(() => {
		dispatch(getAllTodos(setList));
	}, [dispatch])

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
				if (key.includes('%')) {
					req[key] = parseInt(value.slice(0, -1));
				} else {
					req[key] = parseInt(value);
				}
            } else {
                return req[key] = value}
            }
        );
		
		dispatch(createTodoItem(selected.id, req, setItem));
    }

	function handleEditItemForm(event) {
		event.preventDefault();
        const form = new FormData(event.target);
        const req = {target_todo_id: selected.todo_id};
        form.forEach((value, key) => {
            if (key === 'progress_percentage') {
				if (key.includes('%')) {
					req[key] = parseInt(value.slice(0, -1));
				} else {
					req[key] = parseInt(value);
				}
            } else {
                return req[key] = value}
            }
        );
		dispatch(updateTodoItem(selected.todo_id, selected.id, req, updateItem));
	}

	function handleDeleteItemForm(event) {
        event.preventDefault();
        dispatch(deleteTodoItem(selected.todo_id, selected.id, deleteItem));
	}

	function handleMoveRight(item) {
		const current = todoIds.indexOf(item.todo_id);
		const next = current+1;

		if(next < todoIds.length) {
			const req = {
				target_todo_id: todoIds[next],
				name: item.name,
				progress_percentage: item.progress_percentage
			};
			dispatch(moveTodoItem('right', item.todo_id, item.id, req, moveItem));
		}
	}

	function handleMoveLeft(item) {
		const current = todoIds.indexOf(item.todo_id);
		const prev = current-1;

		if(prev >= 0) {
			const req = {
				target_todo_id: todoIds[prev],
				name: item.name,
				progress_percentage: item.progress_percentage
			};
			dispatch(moveTodoItem('left', item.todo_id, item.id, req, moveItem));
		}
	}

	return (
		<>
			<Header/>
			<section className="container p-4">
				<div className="row px-3">
					{todoList.map((todo) => {
						return (
							<Todo
							key={todo.id}
							id={todo.id}
							title={todo.title}
							description={todo.description}
							items={todo?.items}
							listTodos={todoList}
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
				formValue={selected}
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
