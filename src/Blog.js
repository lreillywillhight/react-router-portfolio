import React from 'react'
import DeleteButton from './DeleteButton'
import BlogEntry from './BlogEntry'


const Blog = props => {
    return (
        <div>
            <ul>
                {props.posts.map((post, index) => (
                    <li id={index}>
                        <br/>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <br/>
                        <DeleteButton post={post} action={props.action}/>
                    </li>
                ))}
            </ul>
            <br/>
            <br/>
            <br/>
            <BlogEntry createPost={props.createPost}/>
        </div>
        // <div>
        //     <h1>What the heck</h1>
        // </div>
    )
}

export default Blog