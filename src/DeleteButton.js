import React from 'react'

const DeleteButton = props => {
    return (
        <div>
            <input type="button" value={`delete post ${props.post.id}`} onClick={(e) => props.action(props.post)} />
        </div>
    )
}

export default DeleteButton