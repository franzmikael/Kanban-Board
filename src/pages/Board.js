import React, { useEffect, useState } from 'react';
import { Header, Todo } from 'components';
import { getTodos } from 'services';

export default function Board() {
	const [listTodos, setListTodos] = useState([]);

	useEffect(() => {
		getTodos(setListTodos);
	}, [])

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
						/>
					)
					})}
				</div>
			</section>
		</>
	)
}
