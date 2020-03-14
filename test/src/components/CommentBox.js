import React, { Component } from "react";

class CommentBox extends Component {
 
    state={ comment: ''}

    onInputChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const Input = target.input;
        this.setState({comment: Input})
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
