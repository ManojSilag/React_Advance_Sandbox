import React from "react";
import { reduxForm, Field } from "redux-form";
import  { signin } from "./../../actions/index";
import { connect } from "react-redux";
import { compose } from "redux";

const SignIn = (props) => {
  const onSubmit = (formProps) => {
    console.log(formProps);
    props.signin(formProps, () => {
      props.history.push('/Feature')
    });
  };

  console.log(props.errorMessage);
  
  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name='email' type='text' component='input' autoComplete='none' />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name='password'
          type='password'
          component='input'
          autoComplete='none'
        />
      </fieldset>
      <div>
        {props.errorMessage}
      </div>
      <button>Sign In</button>
    </form>
  );
};

const mapStateToProp = (state) => {
  console.log(state);
  
  return { errorMessage: state.auth.errorMessage} 
}

export default compose(
  connect(mapStateToProp, { signin }),
  reduxForm({ form: "signin" })
)(SignIn);
