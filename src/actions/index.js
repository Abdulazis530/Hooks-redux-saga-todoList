import Swal from 'sweetalert2'



export const addTodo = (todo, history) => ({
    type: "ADD_NEW_TODO",
    todo,
    history
})

export const addDataSuccess = (todo) => ({
    type: "ADD_TODO_SUCCESS",
    todo
})
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
// function addTodo(payload) {
//     const { todo, history } = payload;
//     const todos = JSON.parse(localStorage.getItem("data"))
//     todos.push(todo)
//     localStorage.setItem("data", JSON.stringify(todos))
//     try {
//         yield put(actions.addDataSuccess(todo))
//         history.push('/')
//     } catch (error) {
//         console.log(error)

//     }
// }