import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Button, Label, CustomModal } from 'elements';
import { TodoItem } from 'components';
import { getTodoItems, createTodoItem } from 'services';

import PlusCircle from 'assets/icons/plus-circle.svg';

export default function Todo(props) {
    const [visibleCreateItemModal, setVisibleCreateItemModal] = useState(false);
    const [listTodoItems, setListTodoItems] = useState([]);
    const [theme, setTheme] = useState();

    useEffect(() => {
        let res = getTodoItems(props.id, setListTodoItems);
        const color = parseInt(props.id)%4;
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
    }, [props, theme])

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

    function handleForm(event) {
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
        createTodoItem(props.id, req, setListTodoItems);
    }

    return (
        <>
            <div className="col-auto">
                <div className={`card ${theme} p-3 mb-3`}>
                    <div className="card-body p-0">
                        <Label text={props.title} theme={theme}/>
                        <h6 className="card-subtitle mb-2">{props.description}</h6>
                            {listTodoItems.length !== 0 ? (
                                listTodoItems.map((item) => {
                                    return(
                                        <TodoItem
                                            key={item.id}
                                            name={item.name}
                                            done={item.done}
                                            progressPercentage={item.progress_percentage}
                                        />
                                    )
                                })
                            ) : (
                                <TodoItem name="No Task" empty/>
                            )}
                        <Button isPlain icon={PlusCircle} onClick={() => {setVisibleCreateItemModal(true)}}>New Task</Button>
                    </div>
                </div>
            </div>
            <CustomModal
                title='Create Task'
                form={createItemForm}
                formHandler={handleForm}
                visible={visibleCreateItemModal}
                setVisible={setVisibleCreateItemModal}
            />
        </>
    )
}

Todo.propTypes = {
    id: propTypes.number,
    title: propTypes.string,
    description: propTypes.string,
    todoItems: propTypes.array
}