import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Button, Label } from 'elements';
import { TodoItem } from 'components';
import { getTodoItems } from 'services';

import PlusCircle from 'assets/icons/plus-circle.svg';

export default function Todo({id, title, description, setSelectedTodo, setSelectedItem, setVisibleCreateItemModal, setVisibleDeleteModal}) {
    const [listTodoItems, setListTodoItems] = useState([]);
    const [theme, setTheme] = useState();

    useEffect(() => {
        getTodoItems(id, setListTodoItems);
        const color = parseInt(id)%4;
        switch (color) {
            case 1:
                setTheme('primary-outline'); break;
            case 2:
                setTheme('warning-outline'); break;
            case 3:
                setTheme('danger-outline'); break;
            default:
                setTheme('success-outline'); break;
        }
    }, [theme])

    function onClickCreate() {
        setVisibleCreateItemModal(true)
        setSelectedTodo({
            id: id,
            setfunc: setListTodoItems
        })
    }

    return (
        <>
            <div className="col-auto">
                <div className={`card ${theme} p-3 mb-3`}>
                    <div className="card-body p-0">
                        <Label text={title} theme={theme}/>
                        <h6 className="card-subtitle mb-2">{description}</h6>
                            {listTodoItems.length !== 0 ? (
                                listTodoItems.map((item) => {
                                    return(
                                        <TodoItem
                                            key={item.id}
                                            id={item.id}
                                            parentId={item.todo_id}
                                            name={item.name}
                                            done={item.done}
                                            progressPercentage={item.progress_percentage}
                                            setSelectedItem={setSelectedItem}
                                            setVisibleDeleteModal={setVisibleDeleteModal}
                                        />
                                    )
                                })
                            ) : (
                                <TodoItem name="No Task" empty/>
                            )}
                        <Button isPlain icon={PlusCircle} onClick={onClickCreate}>New Task</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

Todo.propTypes = {
    id: propTypes.number,
    title: propTypes.string,
    description: propTypes.string,
    setSelectedTodo: propTypes.func,
    setSelectedItem: propTypes.func,
    setVisibleCreateItemModal: propTypes.func,
    setVisibleDeleteModal: propTypes.func
}