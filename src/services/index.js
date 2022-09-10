import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4NDgsImV4cCI6MTY2MzA3NzU0Mn0.Z4XhAxNJxZw1eeVavGLRZ4_tfPWESzPeqFZCLz6dRR0';

const api = axios.create({
    baseURL: `https://todos-project-api.herokuapp.com/`,
    headers: {'Authorization': 'Bearer ' + token}
})

async function getTodos(setTodos) {
    let res = await api.get('/todos').then((res) => {return res.data});
    setTodos(res);
}

async function createTodo(req, setTodos) {
    let res = await api.post('/todos', req).then((res) => {return res.data});
    getTodos(setTodos);
}

async function getTodoItems(id, setTodoitems) {
    let res = await api.get(`/todos/${id}/items`).then((res) => {return res.data});
    setTodoitems(res);
}

async function createTodoItem(id, req, setTodoitems) {
    let res = await api.post(`/todos/${id}/items`, req).then((res) => {return res.data});
    getTodoItems(id, setTodoitems);
}

export {getTodos, createTodo, getTodoItems, createTodoItem}