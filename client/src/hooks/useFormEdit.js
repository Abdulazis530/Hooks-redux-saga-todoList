import { useState, useEffect } from 'react'

export default function useForm(validate, submitfunc, editedValue) {
    const [values, setValues] = useState(editedValue)
    const [errorValues, setErrorvalues] = useState({})
    const [submit, setSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        setErrorvalues(validate(values, "EDIT"))
        setSubmit(true)
    }

    useEffect(() => {
        if (!Object.keys(errorValues).length && submit) {
            submitfunc(values)
        }
    }, [errorValues])

    return {
        handleChange,
        handleSubmit,
        values,
        errorValues
    }
}