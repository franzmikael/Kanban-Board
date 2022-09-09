import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Button, Label } from 'elements';
import { TodoItem } from 'components';
import { getTodoItems } from 'services';

import PlusCircle from 'assets/icons/plus-circle.svg';

export default function Todo(props) {
    const [listTodoItems, setListTodoItems] = useState([]);
    const [theme, setTheme] = useState();

    useEffect(() => {
        getTodoItems(props.id, setListTodoItems);
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

    return (
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
                            <TodoItem name="No Task" noItem/>
                        )}
                    <Button isPlain icon={PlusCircle}>New Task</Button>
                </div>
            </div>
        </div>
    )
}

Todo.propTypes = {
    id: propTypes.number,
    title: propTypes.string,
    description: propTypes.string,
    todoItems: propTypes.array
}