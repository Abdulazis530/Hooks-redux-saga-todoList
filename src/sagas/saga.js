import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios'
import Swal from 'sweetalert2'

// const API_URL = 'http://localhost:3001/api/'

// const request = axios.create({
//     baseURL: API_URL,
//     timeout: 1000
// });


// const read = async (path) =>
//     await request.get(path)
//         .then(response => response.data)
//         .catch(err => {
//             throw err
//         });





// load

function* loadTodo() {

    try {
        const todos = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
        yield put(actions.loadTodosSuccess(todos));
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'warning',
            title: "Network connection trouble!",
            text: "Call administator to fix the issue",
            type: "warning",
            buttons: true,
            dangerMode: true,
            timer: 1500
        })

    }
}

//add
function* addTodo(payload) {
    const { todo, history } = payload;
    const todos = JSON.parse(localStorage.getItem("data"))
    todos.push(todo)
    localStorage.setItem("data", JSON.stringify(todos))
    try {
        yield put(actions.addDataSuccess(todo))
        history.push('/')
    } catch (error) {
        console.log(error)

    }
}
// }
//edit
// function* updateAddsDetail(payload) {
//     const { id, vote, history } = payload
//     const QUERY_PATH = `${PATH}/${id}`

//     yield call(update, QUERY_PATH, { vote })
//     try {
//         yield put(actions.resetDetailAdds())
//     } catch (error) {
//         console.log(error)

//         Swal.fire({
//             icon: 'warning',
//             title: "Something went Wrong!",
//             text: "Call administator to fix the issue",
//             type: "warning",
//             buttons: true,
//             dangerMode: true,
//             timer: 1500
//         }).then(() => history.push(`/detail/${id}`))
//     }
// }


export default function* rootSaga() {
    yield all([

        // takeEvery('GET_WEATHER', loadWeather),
        takeEvery('ADD_NEW_TODO', addTodo),
        takeEvery('LOAD_TODO', loadTodo),
        // takeEvery('DELETE_TODO', deleteTodo),
        // takeEvery('EDIT_TODO', editTodo)
    ]);
}