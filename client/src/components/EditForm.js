import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo } from '../actions'
import useFormEdit from '../hooks/useFormEdit'
import validate from "../utils/validate"


export default function EditForm({ onClose, editedValue, id }) {

    const dispatch = useDispatch()
    const submit = (values) => {
        if (values.isDone === "ACTIVE") values.isDone = false
        if (values.isDone === "COMPLETE") values.isDone = true
        dispatch(editTodo(id, values))
        onClose()

    };

    const { handleChange, handleSubmit, values, errorValues } = useFormEdit(validate, submit, editedValue)


    return (
        <form className="form" onSubmit={handleSubmit} noValidate>
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
            <div className="form__row">
                <label htmlFor="inputState">Status</label>
                <select
                    id="inputState"
                    className={`form__input ${errorValues.title && "error"}`}
                    onChange={handleChange}
                    name="isDone"
                >
                    <option>{`Current Status : ${values.isDone ? "COMPLETE" : "ACTIVE"}`} </option>
                    <option value="COMPLETE">Complete</option>
                    <option value="ACTIVE">Active</option>
                </select>

                {
                    errorValues.isDone && <p className="error-input">{errorValues.isDone}</p>
                }
            </div>
            <button className="btn btn-save" type="submit">
                <span className="btn-text"> Update </span>
            </button>
        </form>
    )
}