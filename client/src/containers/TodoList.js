import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodo } from '../actions'
import Spinner from '../components/Spinner'
import TodoItem from '../components/TodoItem'


export default function TodoList() {
    const dispatch = useDispatch()
    const { todos, filter, isLoading } = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(loadTodo(filter))
    }, [dispatch, filter])


    console.log(todos)
    return (
        <div className="todo__box">

            {
                isLoading ? <Spinner />
                    :
                    todos.map((todo, index) =>
                        <TodoItem
                            key={index}
                            title={todo.title}
                            content={todo.content}
                            time={todo.createdAt}
                            isDone={todo.isDone}
                            id={todo.id}
                        />)
            }
            {filter !== "SEARCHED" && !todos.length && <h1>Yaaay to got nothing Todo!</h1>}
            {filter === "SEARCHED" && !todos.length && <h1>Todo not found!</h1>}
        </div>
    )
}
