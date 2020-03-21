import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './HeaderStyle.css';

const Header = (props) => {

  console.log(props.authenticated);
  
  const renderLinks = () => {
    if (props.authenticated) {
      return (
        <div>
          <Link to='/Singout'>Sign Out</Link>
          <Link to='/Feature'>Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/Singup'>Sign Up</Link>
          <Link to='/Singin'>Sign In</Link>
        </div>
      );
    }
  };

  return (
    <div className="header">
      <Link to='/'>Redux Auth</Link>
      {renderLinks()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(Header);
