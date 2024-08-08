import React, { Component } from 'react'

import { connect } from 'react-redux';

 class EditComponent extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;    
        const data = {
            newTitle,
            newMessage,
        }
        this.props.dispatch({type: 'UPDATE' , id:this.props.post.id, data: data })
    }

  render() {
    return (
      <div>
          <form onSubmit={this.handleEdit}>
            <input type='text' ref={(input) => this.getTitle = input} defaultValue={this.props.post.title} placeholder='enter post title' required />
            <br/><br/>
            <textarea  cols="30" rows="5" placeholder='enter post' defaultValue={this.props.post.message}  ref={(input) => this.getMessage = input} required/>
            <br/><br/>

            <button>Post </button>
        </form>
      </div>
    )
  }
}

export default connect()(EditComponent)
