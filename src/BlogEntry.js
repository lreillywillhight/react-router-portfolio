import React, {useState} from 'react'

const BlogEntry = props => {

    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [topic, setTopic] = useState('blah')
    
    function handleSubjectChange(e) {
        setSubject(e.target.value)
    }

    function handleBodyChange(e) {
        setBody(e.target.value)
    }

    function handleTopicChange(e) {
        setTopic(e.target.value)
    }

    // function handleSubmit(e) {
    //     alert(`${subject}, ${body}, ${topic}`)
    //     e.preventDefault()
    // }

    return (
        <form className="entryField" onSubmit={(e) => props.createPost({subject:`${subject}`,body:`${body}`})}>
            <h4>Post Time</h4>
            <div>
                <label htmlFor="subject">Subject:</label>
                <input type="text" name="subject" value={subject} onChange={handleSubjectChange} />
            </div>
            <div>
                <label htmlFor="body">Post:</label>
                <textarea name="body" id="body" cols="30" rows="10" value={body} onChange={handleBodyChange}></textarea>
            </div>
            <div>
                <label htmlFor="topic">Topic</label>
                <select value={topic} name="topic" id="topic" onChange={handleTopicChange}>
                    <option value="blah">Blah</option>
                    <option value="fart">Fart</option>
                    <option value="poof">Poof</option>
                </select>
            </div>
            <button type="submit">Create Post</button>
        </form>
    )
}


export default BlogEntry