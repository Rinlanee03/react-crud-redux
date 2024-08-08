import React, { Component } from 'react'
import PostForm from './PostForm'
import AllPost from './AllPost'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h1 className='center'>Post it</h1>
        </div>
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default App;