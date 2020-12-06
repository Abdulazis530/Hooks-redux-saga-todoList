import React from 'react'
import moment from 'moment';
import Fade from "react-reveal/Fade"

export default function TodoItem(props) {
    const { title, content, time, isDone } = props
    return (
        <Fade bottom>

            <div className="todo__item">
                <div className="card__header">
                    <h2 className="todo__title"> {title}</h2>
                    <div className="todo__meta">
                        <span className={`todo__status ${isDone ? "complete" : "active"}`}>{isDone ? "complete" : "active"}</span>
                        <span className="todo__date">
                            {moment.unix(time).fromNow()}
                        </span>
                    </div>

                </div>
                <div className="card__body">
                    <p className="todo__content">
                        {content}
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
        </Fade>
    )
}
