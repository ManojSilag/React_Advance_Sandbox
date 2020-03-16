import React,{ Component} from "react";
import { Route, Link } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { connect } from "react-redux";
import { changeAuth } from 'actions'

class App extends Component {

   renderButton(){
      return <button onClick={()=>this.props.changeAuth( !this.props.auth )}>{ this.props.auth ? 'SignOut' : 'SingIn'}</button>
   }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post a Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox} />
        <Route path='/' exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   console.log(state);
   return { auth : state.auth }
   
}

export default connect(mapStateToProps, { changeAuth })(App);
