import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Blog from './Blog'



function App() {

    //this could be moved to ./Blog, I have not gotten around to it.
    const testState = [
        {
            idc:0,
            title: "test",
            body: "This is a test post."
        },
        {
            idc:1,
            title: "another test post",
            body: "this is another test post"
        },
        {
            idc:2,
            title: "more posts",
            body: "another truly awesome test post"
        },
        {   
            idc:3,
            title: "wow more posts",
            body: "wow this site is really cool"
        },
    ]

    // posts is an array of objects idc,title,body
    const [posts,setPosts] = useState(testState)

    // to be used and incremented with each post created
    const [idCounter,setIdCounter] = useState(testState.length) //'4'

    //debugging function
    useEffect(() => {
        console.log(posts[1])
        console.log(idCounter)
    },
    [posts])

    function createPost(form) {
        console.log(idCounter,form)
        // e.preventDefault()
    }
    
    function deletePost(e) {
        console.log(document.getElementById())
        // let postId = e.id
        // let idMismatch = function(i) {
        //     return (i.id !== postId)
        // }
        // let newPosts = posts.filter(idMismatch)
        // setPosts(newPosts)
    }


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
