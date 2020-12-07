import { useState, useEffect } from 'react'

export default function useForm(validate, submitfunc) {
    const [values, setValues] = useState({ title: "", content: "" })
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
        alert("clicked")
        e.preventDefault();
        setErrorvalues(validate(values))
        setSubmit(true)
    }

    useEffect(() => {

        if (!Object.keys(errorValues).length && submit) {
            submitfunc(values)
            console.log(errorValues)
        }
    }, [errorValues])

    return {
        handleChange,
        handleSubmit,
        values,
        errorValues
    }
}