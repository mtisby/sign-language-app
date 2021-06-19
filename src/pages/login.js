import React, { useState, useEffect } from "react";
import styled from "styled-components";
//@flow
const StyledDiv = styled.div``;
export type loginProps = {
  fullname: String,
  setFullname: (string) => void,
  email: String,
  setEmail: (string) => void,
  password: String,
  setPassword: (string) => void,
  handleLogin: (string) => void,
  handleSignUp: (string) => void,
  hasAccount: Boolean,
  setHasAccount: (string) => void,
  emailErr: String,
  passwordErr: String,
};
const Login = ({
  fullname,
  setFullname,
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignUp,
  hasAccount,
  setHasAccount,
  emailErr,
  passwordErr,
}: loginProps) => {
  function handleClick(e) {
    setHasAccount(!hasAccount);
  }

  return (
    <StyledDiv>
      <label>Full Name</label>
      <input
        type="text"
        autoFocus
        required
        value={fullname}
        onChange={(event) => setFullname(event.target.value)}
      />
      <label>Email</label>
      <input
        type="text"
        autoFocus
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p className="error message">{emailErr}</p>
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <p className="error message">{passwordErr}</p>
      {hasAccount ? (
        <>
          <button onClick={handleLogin}>Sign In</button>
          <p>
            Don't have an account?
            <span onClick={handleClick}> Sign Up</span>
          </p>
        </>
      ) : (
        <>
          <button onClick={handleSignUp}>Sign Up</button>
          <p>
            Have an account?
            <span onClick={handleClick}> Sign In</span>
          </p>
        </>
      )}
    </StyledDiv>
  );
};
export default Login;
