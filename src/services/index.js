import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4NTgsImV4cCI6MTY2NDE3MTE5OX0.UGnowRI0XNrUUfDt2sXPrYa-I2aiIfxDd314-8SilD8';

const api = axios.create({
    baseURL: `https://todos-project-api.herokuapp.com/`,
    headers: {'Authorization': 'Bearer ' + token}
})

const getAllTodos = (setTodos) => async (dispatch) => {
    let res = await api.get('/todos').then((res) => {return res.data});

    for await (const item of res) {
        const child = await api.get(`/todos/${item.id}/items`).then((res) => {return res.data});
        item.items = child;
    }

    dispatch(setTodos(res));
}

const createTodo = (req, setter) => async (dispatch) => {
    let res = await api.post('/todos', req).then((res) => {return res.data});
    dispatch(setter(res));
}

const createTodoItem = (id, req, setter) => async (dispatch) => {
    let res = await api.post(`/todos/${id}/items`, req).then((res) => {return res.data});
    dispatch(setter([id, res]));
}

const updateTodoItem = (parentId, id, req, setter) => async (dispatch) =>  {
    let res = await api.patch(`/todos/${parentId}/items/${id}`, req).then((res) => {return res.data});
    dispatch(setter([parentId, id, res]));
}

const moveTodoItem = (direction, parentId, id, req, setter) => async (dispatch) => {
    let res = await api.patch(`/todos/${parentId}/items/${id}`, req).then((res) => {return res.data});
    dispatch(setter([direction, parentId, id, res]));
}

const deleteTodoItem = (parentId, id, setter) => async (dispatch) =>  {
    let res = await api.delete(`/todos/${parentId}/items/${id}`).then((res) => {return res.data});
    dispatch(setter([parentId, id]));
}

export {getAllTodos, createTodo, createTodoItem, updateTodoItem, moveTodoItem, deleteTodoItem}