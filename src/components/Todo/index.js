import React from 'react'
import propTypes from 'prop-types'
import { Button, Label } from 'elements'
import { TodoItem } from 'components'

import PlusCircle from 'assets/icons/plus-circle.svg'

export default function Todo(props) {
    let theme, items;
    const color = parseInt(props.id)%4;
    switch (color) {
        case 1:
            theme = 'primary-outline';
            break;
        case 2:
            theme = 'warning-outline';
            break;
        case 3:
            theme = 'danger-outline';
            break;
        default:
            theme = 'success-outline';
            break;
    }

    const hasItems = props.hasOwnProperty('todoItems');
    if(hasItems && props.todoItems.length !== 0) {
        items = props.todoItems.map((item) => {
            return(
                <TodoItem
                    key={item.id}
                    name={item.name}
                    done={item.done}
                    progressPercentage={item.progress_percentage}
                />
            )
        })
    } else {
        items = <TodoItem name="No Task" noItem/>
    }

    return (
        <div className="col-auto">
            <div className={`card ${theme} p-3 mb-3`}>
                <div className="card-body p-0">
                    <Label text={props.title} theme={theme}/>
                    <h6 className="card-subtitle mb-2">January - March</h6>
                        {items}
                    <Button isPlain icon={PlusCircle}>New Task</Button>
                </div>
            </div>
        </div>
    )
}

Todo.propTypes = {
    title: propTypes.string,
    todoItems: propTypes.array
}