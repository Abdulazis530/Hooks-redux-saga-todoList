const todos = (state = { todos: [], isLoading: true, filter: "ALL" }, action) => {
    switch (action.type) {
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                filter: action.filter,
                todos: [action.todo, ...state.todos],
                isLoading: false
            }
        case 'LOAD_TODO_SUCCESS':
            return {
                ...state,
                todos: action.todos,
                filter: action.filter,
                isLoading: false
            }
        case 'DELETE_TODO_SUCCESS':
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.id)],
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case "ADD_TODO_FAILED":
            return {
                ...state,
                filter: action.filter,
                isLoading: false
            }
        case "DELETE_FAILED":
        case "LOAD_TODO_FAILED":
        default:
            return {
                ...state,
                isLoading: false
            }
    }
}
export default todos