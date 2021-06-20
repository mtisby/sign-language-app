//@flow
import React, { useState, useEffect } from "react";
import fireAuth from "./firebase";
import styled from "styled-components";
import Login from "./login";
import Dashboard from "./Dashboard";
const WrapperDiv = styled.div`
`;

const SignUp = () => {
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
  
  function addUser(){
    fetch("http://localhost:5000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        pwd:password,
        email: email,
        points:0,
        achv:0
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
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
     addUser();
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
    <WrapperDiv style={{backgroundImage: `url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")`}}>
      {user ? (
        <Dashboard handleLogOut={handleLogOut}/>
      ) : (
        <Login
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
