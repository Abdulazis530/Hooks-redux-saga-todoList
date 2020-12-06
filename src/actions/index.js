import { v4 as uuidv4 } from 'uuid';



const todosStorage = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []

export const addTodo = (todo) => dispatch => {
    /*adding addtional property to todo object before store it in the localstorage */
    todo.isDone = false
    todo.id = uuidv4()
    /*record unix time when todo created*/
    const d = new Date();
    todo.time = Math.floor(d.getTime() / 1000);
    /*store in localstorage*/
    todosStorage.push(todo)
    localStorage.setItem("todos", JSON.stringify(todosStorage))
    /*send to reducer store for display purpose*/
    dispatch({ type: "ADD_TODO_SUCCESS", todo })
}



export const loadTodo = () => ({
    type: "LOAD_TODO"
})

export const loadTodosSuccess = (todos) => ({
    type: "LOAD_TODO_SUCCESS",
    todos

})

// function* loadTodo() {

//     try {
//         const todos = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
//         yield put(actions.loadTodosSuccess(todos));
//     } catch (error) {
//         console.log(error);
//         Swal.fire({
//             icon: 'warning',
//             title: "Network connection trouble!",
//             text: "Call administator to fix the issue",
//             type: "warning",
//             buttons: true,
//             dangerMode: true,
//             timer: 1500
//         })

//     }
// }

// //add
