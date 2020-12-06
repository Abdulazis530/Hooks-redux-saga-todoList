
const validate = (values) => {
    const { title, content } = values
    const errors = {}
    if (!title) errors.title = "Title is required!"
    if (!content) errors.content = "Content is required!"

    return errors
}

export default validate