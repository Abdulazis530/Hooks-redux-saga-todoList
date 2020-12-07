import React, { useState } from 'react'
import moment from 'moment';
import Fade from "react-reveal/Fade"
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../actions'
import Swal from 'sweetalert2'
import Modal from './Modals';
import EditForm from './EditForm';

export default function TodoItem(props) {
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const { title, content, time, isDone, id } = props

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This todo will be deleted !",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#08db93',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No!',
        }).then(result => {
            if (result.value) {
                dispatch(deleteTodo(id))
            }
        })
    }
    return (
        <Fade bottom>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} isEdit >
                <EditForm onClose={() => setOpenModal(false)} editedValue={{ title, content, isDone }} id={id} />
            </Modal>
            <div className="todo__item">
                <div className="card__header">
                    <h2 className="todo__title"> {title}</h2>
                    <div className="todo__meta">
                        <span className={`todo__status ${isDone ? "complete" : "active"}`}>{isDone ? "complete" : "active"}</span>
                        <span className="todo__date">
                            {moment(time).fromNow()}
                        </span>
                    </div>

                </div>
                <div className="card__body">
                    <p className="todo__content">
                        {content}
                    </p>
                </div>
                <div className="card__footer">
                    <button className="btn btn-edit" onClick={() => setOpenModal(true)}>
                        <i className="fas fa-edit icon" />
                        <span className="btn-text">edit</span>
                    </button>
                    <button className="btn btn-delete" onClick={() => handleDelete(id)}>
                        <i className="fas fa-trash icon" />
                        <span className="btn-text">delete</span>
                    </button>
                </div>
            </div>
        </Fade>
    )
}
