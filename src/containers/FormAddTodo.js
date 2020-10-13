import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../components/Header'
import { addTodo } from '../actions'
import { v4 } from 'uuid'
export default function FormAddTodo({ history }) {

    const dispatch = useDispatch()
    const [todo, setTodo] = useState({
        title: "",
        content: "",
        category: "frontend"
    });


    function handleChange(event) {
        const { name, value } = event.target;
        setTodo(prevTodo => {
            return {
                ...prevTodo,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        event.preventDefault();
        todo.id = v4()

        dispatch(addTodo(todo, history))
        setTodo({
            title: "",
            content: ""
        });


    }

    useEffect(() => {
        console.log(todo)
    }, [todo])
    return (
        <>
            <Header>
                <h1 className="header-title-addTodo"> Add New Todo</h1>
            </Header>
            <div>
                <form>
                    <label>Todo Title</label>
                    <input
                        name="title"
                        onChange={handleChange}
                        value={todo.title}
                        placeholder="Title"
                    />
                    <label>Todo Text</label>

                    <textarea
                        name="content"
                        onChange={handleChange}
                        value={todo.content}
                        placeholder="Take a todo..."
                        rows="3"
                    />
                    <label>Todo Category</label>
                    <select name="category" onChange={handleChange}>
                        <option value="FRONT_END">Frontend developer</option>
                        <option value="BACK-END">Backend developer</option>
                    </select>
                    <button onClick={submitNote}>Add</button>
                </form>
            </div>

        </>
    )
}
