//@flow
import React, { useState, useEffect } from "react";
import fireAuth from "./firebase";
import styled from "styled-components";
import Login from "./login";
import Dashboard from "./Dashboard";

const WrapperDiv = styled.div``;

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  function handleLogin() {
    clearErrors();

    fireAuth
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((errors) => {
        switch (errors.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailErr(errors.message);
            break;
          case "auth/wrong-password":
            setPasswordErr(errors.message);
            break;
        }
      });
  }
  function handleSignUp(e) {
    clearErrors();

    fireAuth
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((errors) => {
        switch (errors.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailErr(errors.message);
            break;
          case "auth/weak-password":
            setPasswordErr(errors.message);
            break;
        }
      });
  }
  function handleLogOut() {
    fireAuth.auth().signOut();
  }
  function authListener() {
    fireAuth.auth().onAuthStateChanged((user) => {
      if (user) {
        clear();
        setUser(user);
      } else setUser("");
    });
  }
  function clear() {
    setFullname("");
    setEmail("");
    setPassword("");
  }
  function clearErrors() {
    setPasswordErr("");
    setEmailErr("");
  }
  useEffect(() => {
    authListener();
  }, []);
  return (
    <WrapperDiv>
      {user ? (
        <Dashboard fullname={fullname} email={email} />
      ) : (
        <Login
          fullname={fullname}
          setFullname={setFullname}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailErr={emailErr}
          passwordErr={passwordErr}
        />
      )}
    </WrapperDiv>
  );
};
export default SignUp;
