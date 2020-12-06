const todos = (state = { todos: [], isLoading: false, isError: false, filter: "ALL" }, action) => {
    switch (action.type) {
        case 'ADD_TODO_SUCCESS':

            return {
                ...state,
                filter: action.filter

            }

        case 'LOAD_TODO_SUCCESS':
            console.log("INSIDE REDUCER:", action.filter)

            return {
                ...state,
                todos: action.todos,
                filter: action.filter


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