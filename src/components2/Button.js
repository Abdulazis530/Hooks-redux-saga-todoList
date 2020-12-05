import React from 'react'
import propTypes from 'prop-types';




export default function Button(props) {

    const className = ["btn", props.className]
    if (props.isPrimary) className.push("btn-primary")
    if (props.isBlock) className.push("btn-block")
    if (props.isRounded) className.push("btn-round")

    return (
        <Button className={className.join(" ")}>
            {props.children}
        </Button>
    )
}
Button.propTypes = {
    onClick: propTypes.func,
    className: propTypes.string,
    isLoading: propTypes.bool,
    isRounded: propTypes.bool
}

