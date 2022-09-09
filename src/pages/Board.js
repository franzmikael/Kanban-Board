import React from 'react';
import {Header, Todo} from 'components';

export default function Board() {

  const listTodos = [
    {
      "id": 1,
      "title": "Group Task 1",
      "description": "January - March",
      "created_by": "1",
      "created_at": "2021-04-20T23:47:50.046Z",
      "updated_at": "2021-04-20T23:47:50.046Z"
    },
    {
      "id": 2,
      "title": "Group Task 2",
      "description": "April - June",
      "created_by": "1",
      "created_at": "2021-04-21T00:04:23.906Z",
      "updated_at": "2021-04-21T00:04:23.906Z"
    },
    {
      "id": 3,
      "title": "Group Task 3",
      "description": "July - September",
      "created_by": "1",
      "created_at": "2021-04-21T00:04:23.906Z",
      "updated_at": "2021-04-21T00:04:23.906Z"
    },
    {
      "id": 4,
      "title": "Group Task 4",
      "description": "October - December",
      "created_by": "1",
      "created_at": "2021-04-21T00:04:23.906Z",
      "updated_at": "2021-04-21T00:04:23.906Z"
    }
  ]

  const listTodoItems = [
    {
      "id": 1,
      "name": "Re-designed the zero-g doggie bags. No more spills!",
      "done": true,
      "todo_id": 1,
      "created_at": "2021-04-21T00:12:06.116Z",
      "updated_at": "2021-04-21T00:12:06.116Z",
      "progress_percentage": 100
    },
    {
      "id": 2,
      "name": "Bundle interplanetary analytics for improved transmission",
      "done": null,
      "todo_id": 1,
      "created_at": "2021-04-21T00:14:38.397Z",
      "updated_at": "2021-04-21T00:14:38.397Z",
      "progress_percentage": 30
    },
    {
      "id": 3,
      "name": "Data Migration: Performance & Culture End Game",
      "done": null,
      "todo_id": 3,
      "created_at": "2021-04-21T00:14:38.397Z",
      "updated_at": "2021-04-21T00:14:38.397Z",
      "progress_percentage": 60
    },
    {
      "id": 4,
      "name": "Bundle interplanetary analytics for improved transmission",
      "done": null,
      "todo_id": 4,
      "created_at": "2021-04-21T00:14:38.397Z",
      "updated_at": "2021-04-21T00:14:38.397Z",
      "progress_percentage": 20
    }
  ]

  return (
    <>
      <Header/>
      <section className="container p-4">
        <div className="row px-3">
            {listTodos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  todoItems={listTodoItems.filter((item) => {return item.todo_id === todo.id})}
                />
              )
            })}
        </div>
      </section>
    </>
  )
}
