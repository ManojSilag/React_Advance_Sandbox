import React, {Component} from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {

  class ComposedComponent extends Component {

    componentDidMount(){
      //  this.props.auth
      this.shouldNavigateAway()
      }
    
      componentDidUpdate(){
    this.shouldNavigateAway()
      }
    
      shouldNavigateAway(){
        if(!this.props.auth){
          this.props.history.push('/')
          
        }
      }

      render() { 
          return ( <ChildComponent {...this.props}/> );
      }
  }

  const mapStateTOProps = (state) => {
    return { auth : state.auth.authenticated }
  }
  return connect(mapStateTOProps)(ComposedComponent);
};