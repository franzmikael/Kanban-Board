import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Button, Label } from 'elements';
import { TodoItem } from 'components';

import PlusCircle from 'assets/icons/plus-circle.svg';

export default function Todo({id, title, description, items, setSelectedTodo, setSelectedItem, setVisibleCreateItemModal, setVisibleEditModal, setVisibleDeleteModal, handleMoveRight, handleMoveLeft}) {
    const [theme, setTheme] = useState();

    useEffect(() => {
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
    }, [id, theme])

    function onClickCreate() {
        setVisibleCreateItemModal(true)
        setSelectedTodo({
            id: id
        })
    }

    return (
        <>
            <div className="col-auto">
                <div className={`card ${theme} p-3 mb-3`}>
                    <div className="card-body p-0">
                        <Label text={title} theme={theme}/>
                        <h6 className="card-subtitle mb-2">{description}</h6>
                            {items && items.length !== 0 ? (
                                items.map((item) => {
                                    return(
                                        <TodoItem
                                            key={item.id}
                                            id={item.id}
                                            parentId={item.todo_id}
                                            name={item.name}
                                            done={item.done}
                                            progressPercentage={item.progress_percentage}
                                            setSelectedItem={setSelectedItem}
                                            setVisibleEditModal={setVisibleEditModal}
                                            setVisibleDeleteModal={setVisibleDeleteModal}
                                            handleMoveRight={handleMoveRight}
                                            handleMoveLeft={handleMoveLeft}
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
    items: propTypes.array,
    setSelectedTodo: propTypes.func,
    setSelectedItem: propTypes.func,
    setVisibleCreateItemModal: propTypes.func,
    setVisibleEditModal: propTypes.func,
    setVisibleDeleteModal: propTypes.func,
    handleMoveRight: propTypes.func,
    handleMoveLeft: propTypes.func
}