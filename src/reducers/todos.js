
const todos = (state = { allTodos: [], filterTodos: [] }, action) => {
    switch (action.type) {
        case 'ADD_TODO_SUCCESS':
            return {
                allTodos: [{
                    id: action.todo.id,
                    title: action.todo.title,
                    content: action.todo.content,
                    categoty: action.todo.category,
                    completed: false,
                    isEdit: false
                },
                ...state.allTodos
                ],
                filterTodos: state.filterTodos
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
