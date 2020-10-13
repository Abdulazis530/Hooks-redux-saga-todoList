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