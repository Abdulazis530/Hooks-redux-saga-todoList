import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Swal from 'sweetalert2'

const request = axios.create({
    baseURL: 'http://192.168.43.9:3001/api/',
    timeout: 1000,
});


const todosStorage = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []

export const addTodo = (todo, filter) => {
    return dispatch => {
        todo.isDone = false
        todo.id = uuidv4()
        request.post("todos", todo).then((response) => {
            const { data } = response.data
            console.log(`TEST ADD TODO:`, data)
            Swal.fire({
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            dispatch({ type: "ADD_TODO_SUCCESS", todo: data, filter })
        })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                })
                dispatch({ type: "ADD_TODO_FAILED" })
            })
    }
}


export const loadTodo = (filter) => {
    console.log(filter)
    return dispatch => {
        dispatch({ type: "SET_LOADING" })
        request.get('todos').then(response => {
            const { data } = response.data
            switch (filter) {
                case "ALL":
                    return dispatch({ type: "LOAD_TODO_SUCCESS", todos: data, filter })
                case "ACTIVE":
                    const activeTodos = data.filter(todo => !todo.isDone)
                    return dispatch({ type: "LOAD_TODO_SUCCESS", todos: activeTodos, filter })
                case "COMPLETE":
                    const completeTodos = data.filter(todo => todo.isDone)
                    return dispatch({ type: "LOAD_TODO_SUCCESS", todos: completeTodos, filter })
                default:
                    let re = new RegExp(filter, 'gi')
                    const searchedTodo = data.filter(todo => re.test(todo.title))
                    return dispatch({ type: "LOAD_TODO_SUCCESS", todos: searchedTodo, filter: "SEARCHED" })
            }
        }).catch(error => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
            if (filter !== "ALL" && filter !== "ACTIVE" && filter !== "COMPLETE") {
                return dispatch({ type: "LOAD_TODO_FAILED", filter: "SEARCHED" })
            }
            dispatch({ type: "LOAD_TODO_FAILED", filter })
        })
    }
}


export const deleteTodo = (id) => {
    return dispatch => {
        request.delete(`todos/${id}`).then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Todo has been deleted',
                showConfirmationButton: false,
            })
            return dispatch({ type: "DELETE_TODO_SUCCESS", id })
        }).catch(error => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
            dispatch({ type: "DELETE_TODO_FAILED" })
        })
    }
}


