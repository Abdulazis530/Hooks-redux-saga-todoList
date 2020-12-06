import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodo } from '../actions'
import TodoItem from '../components/TodoItem'


export default function TodoList() {
    const dispatch = useDispatch()
    const { todos, filter } = useSelector(state => state.todos)

    useEffect(() => {
        console.log("INSIDE TODOLIST USEEFECT:", filter)
        dispatch(loadTodo(filter))
    }, [dispatch])
    console.log("INSIDE TODOLIST:", todos)


    return (
        <div className="todo__box">
            {todos.map((todo, index) =>
                <TodoItem
                    key={index}
                    title={todo.title}
                    content={todo.content}
                    time={todo.time}
                    isDone={todo.isDone}
                />)}
        </div>
    )
}
