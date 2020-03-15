import React, { Component } from "react";

class CommentBox extends Component {
 
    state={ comment: ''}

    onInputChange = (event) => {
        this.setState({comment: event.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();  
        this.setState({comment: ''})
    }
     
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea 
          value={this.state.comment}
          onChange={this.onInputChange}
          />
          <div>
            <button>Submit Commit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;
