
const validate = (values, type = null) => {
    const { title, content, isDone } = values
    const errors = {}
    if (!title) errors.title = "Title is required!"
    if (!content) errors.content = "Content is required!"
    if (!isDone && type === "EDIT") errors.isDone = "Status is required!"
    console.log("erorrs", errors)
    return errors
}

export default validate