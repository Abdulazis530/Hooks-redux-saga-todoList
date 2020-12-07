import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../actions'
import useFormAdd from '../hooks/useFormAdd'
import validate from "../utils/validate"


export default function AddForm({ onClose }) {

    const { filter } = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const submit = (values) => {
        dispatch(addTodo(values, filter))
        onClose()
    };
    const { handleChange, handleSubmit, values, errorValues } = useFormAdd(validate, submit)


    return (
        <form className="form" onSubmit={handleSubmit} noValidate autocomplete="off">
            <div className="form__row">
                <label>Title</label>
                <input
                    name="title"
                    placeholder="Add todo title"
                    className={`form__input ${errorValues.title && "error"}`}
                    onChange={handleChange}
                    value={values.title}
                />
                {
                    errorValues.title && <p className="error-input">{errorValues.title}</p>

                }
            </div>

            <div className="form__row">
                <label>Content Todo</label>
                <textarea
                    name="content"
                    placeholder="Add todo content"
                    className={`form__input--textarea ${errorValues.content && "error"}`}
                    onChange={handleChange}
                    value={values.content}

                />
                {
                    errorValues.content && <p className="error-input">{errorValues.content}</p>
                }
            </div>
            <button className="btn btn-save" type="submit">
                <span className="btn-text"> Save </span>
            </button>
        </form>
    )
}