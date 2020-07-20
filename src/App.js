import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Blog from './Blog'



function App() {
    const [posts,setPosts] = useState
    ([
        {
            id: 0,
            title: "test",
            body: "This is a test post."
        },
        {
            id: 1,
            title: "another test post",
            body: "this is another test post"
        },
        {
            id: 2,
            title: "another test post",
            body: "this is another test post"
        },
        {
            id: 3,
            title: "another test post",
            body: "this is another test post"
        },
    ])

    useEffect(() => {
        console.log(posts)
    },
    [posts])

    function createPost(form) {
        console.log(form.subject)
        // e.preventDefault()
    }
    
    function deletePost(e) {
        let postId = e.id
        let idMismatch = function(i) {
            return (i.id !== postId)
        }
        let newPosts = posts.filter(idMismatch)
        setPosts(newPosts)
        // console.log(e.id)
    }

    // let posts = [
    //     "this is a post",
    //     "this is another post"
    // ]

  return (

    <Router>
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
        <div className="App">
            <h1>Portfolio.</h1>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/blog' render={() => <Blog posts={posts} action={deletePost} createPost={createPost} />} />
        </div>
        
    </Router>

  );
}



export default App;
