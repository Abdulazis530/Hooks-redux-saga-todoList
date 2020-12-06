import { v4 as uuidv4 } from 'uuid';

const todosStorage = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []

export const addTodo = (todo, filter) => dispatch => {
    /*adding addtional property to todo object before store it in the localstorage */
    todo.isDone = false
    todo.id = uuidv4()
    /*record unix time when todo created*/
    const d = new Date();
    todo.time = Math.floor(d.getTime() / 1000);
    /*store in localstorage*/
    todosStorage.unshift(todo)
    localStorage.setItem("todos", JSON.stringify(todosStorage))
    /*send to reducer store for display purpose*/
    dispatch({ type: "ADD_TODO_SUCCESS", filter })
}



export const loadTodo = (type) => {
    console.log(`TYPEE`, type)
    return dispatch => {
        switch (type) {
            case "ALL":
                return dispatch({ type: "LOAD_TODO_SUCCESS", todos: todosStorage, filter: "ALL" })
            case "ACTIVE":
                const activeTodos = todosStorage.filter(todo => !todo.isDone)
                return dispatch({ type: "LOAD_TODO_SUCCESS", todos: activeTodos, filter: "ACTIVE" })
            case "COMPLETE":
                const completeTodos = todosStorage.filter(todo => todo.isDone)
                return dispatch({ type: "LOAD_TODO_SUCCESS", todos: completeTodos, filter: "COMPLETE" })
            default:
                let re = new RegExp(type, 'gi')
                const searchedTodo = todosStorage.filter(todo => re.test(todo.title))
                return dispatch({ type: "LOAD_TODO_SUCCESS", todos: searchedTodo, filter: "SEARCHED" })
        }

    }

}

