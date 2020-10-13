import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodo } from '../actions'
import TodoItem from './TodoItem'

export default function TodoList() {
    const dispatch = useDispatch()
    const { allTodos } = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(loadTodo())
    }, [dispatch])

    console.log(allTodos)
    return (
        <div className="todo-box">
            {
                allTodos.length ?
                    allTodos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            title={todo.title}
                            content={todo.content}
                            category={todo.category}
                            completed={todo.completed}
                        />
                    ))
                    :
                    <h1> Yaaay No Todo</h1>
            }
        </div>
    )
}
