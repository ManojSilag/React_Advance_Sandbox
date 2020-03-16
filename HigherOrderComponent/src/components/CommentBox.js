import React, { Component } from "react";
import * as actions from "./../actions";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "actions/index";

class CommentBox extends Component {
  state = { comment: "" };

  onInputChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.onInputChange} />
          <div>
            <button>Submit Commit</button>
          </div>
        </form>
        <button className='fetch-comments' onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, { saveComment, fetchComments })(CommentBox);
