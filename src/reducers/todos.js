const todos = (state = { todos: [], isLoading: false, isError: false }, action) => {
    switch (action.type) {
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                todos: [action.todo, ...state.todos]

            }

        case 'LOAD_TODO_SUCCESS':
            return {
                allTodos: [...action.todos],
                filterTodos: []
            }
        // case 'FILTER_TODO'
        //     // case 'FILTER_TODO':

        //     //   if(action.title) 
        //     // const filteredTodos = state.allTodos.filter(todo => todo.title===title && todo.category && todo. )

        //     return { totalPage: 0, data: [] }

        default:
            return state
    }
}
export default todos