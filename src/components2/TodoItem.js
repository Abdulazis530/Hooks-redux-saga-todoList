import React from 'react'

export default function TodoItem() {
    return (
        <div className="todo__item">
            <div className="card__header">
                <h2 className="todo__title"> Nama todo</h2>
                <div className="todo__meta">
                    <span className="todo__status complete">Complete</span>
                    {/* <span className="todo__status active">active</span> */}
                    <span className="todo__date">
                        3 years ago
                </span>
                </div>

            </div>
            <div className="card__body">
                <p className="todo__content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="card__footer">
                <button className="btn btn-edit">
                    <i className="fas fa-edit icon" />
                    <span className="btn-text">edit</span>
                </button>
                <button className="btn btn-delete">
                    <i className="fas fa-trash icon" />
                    <span className="btn-text">delete</span>
                </button>
            </div>
        </div>
    )
}
