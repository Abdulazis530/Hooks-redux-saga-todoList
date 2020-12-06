import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodo } from '../actions'
import TodoItem from '../components2/TodoItem'


export default function TodoList() {
    // const dispatch = useDispatch()
    // const { allTodos } = useSelector(state => state.todos)

    // useEffect(() => {
    //     dispatch(loadTodo())
    // }, [dispatch])


    return (
        <div className="todo__box">
            {Array.from('limassss').map(i => <TodoItem key={i} />)}
        </div>
    )
}
