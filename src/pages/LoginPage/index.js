import React from "react";

import css from "./style.module.css";
import Button from "../../components/General/Button";
import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className={css.Login}>
        {this.props.userId && <Redirect to="/orders" />}
        <input onChange={this.changeEmail} type="text" placeholder="email" />
        <input
          onChange={this.changePassword}
          type="password"
          placeholder="nuuts ug"
        />

        {this.props.loggingIn && <Spinner />}

        {this.props.firebaseError && (
          <div style={{ color: "red" }}>{this.props.firebaseError} </div>
        )}
        <Button text="ЛОГИН" btnType="Success" daragdsan={this.login} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggingIn: state.signupReducer.loggingIn,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
