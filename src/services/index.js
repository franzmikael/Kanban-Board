import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4NDgsImV4cCI6MTY2MzA3NzU0Mn0.Z4XhAxNJxZw1eeVavGLRZ4_tfPWESzPeqFZCLz6dRR0';

const api = axios.create({
    baseURL: `https://todos-project-api.herokuapp.com/`,
    headers: {'Authorization': 'Bearer ' + token}
})

async function getTodos(setTodos) {
    let res = await api.get('/todos').then((res) => {return res.data});

    for await (const item of res) {
        const child = await api.get(`/todos/${item.id}/items`).then((res) => {return res.data});
        item.items = child;
    }

    setTodos(res);
}

async function createTodo(req, setTodos) {
    let res = await api.post('/todos', req).then((res) => {return res.data});
    await getTodos(setTodos);
}

async function createTodoItem(id, req, setTodos) {
    let res = await api.post(`/todos/${id}/items`, req).then((res) => {return res.data});
    await getTodos(setTodos);
}

async function updateTodoItem(parentId, id, req, setTodos) {
    let res = await api.patch(`/todos/${parentId}/items/${id}`, req).then((res) => {return res.data});
    await getTodos(setTodos);
}

async function moveTodoItem(parentId, id, req, setTodos) {
    let res = await api.patch(`/todos/${parentId}/items/${id}`, req).then((res) => {return res.data});
    await getTodos(setTodos);
}

async function deleteTodoItem(parentId, id, setTodos) {
    let res = await api.delete(`/todos/${parentId}/items/${id}`).then((res) => {return res.data});
    await getTodos(setTodos);
}

export {getTodos, createTodo, createTodoItem, updateTodoItem, moveTodoItem, deleteTodoItem}