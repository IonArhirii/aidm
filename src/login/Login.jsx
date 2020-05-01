import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/formsControl/formsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from '../components/common/formsControl/formControls.module.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'} component={Input} 
               validate={[required]}
               name={'email'}/>
      </div>
      <div>
        <Field placeholder={'Password'} component={Input}
               type={'password'}
               name={'password'}
               validate={[required]} />
      </div>
      <div>
        <Field type={'checkbox'} name={'remember me'} component={Input}/> remember me
      </div>
      { props.error && <div className={styles.formSummeryError}>
        {props.error}
      </div>}
      <div>
        <button className={'button'}>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  
  if(props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps,{login})(Login);
