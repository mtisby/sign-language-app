import React, { useState, useEffect } from "react";
import styled from "styled-components";
//@flow
const StyledDiv = styled.div``;
const StyledHeading = styled.h2`
  width: 313px;
  height: 121px;
  left: 601px;
  top: 238px;
  font-family: Circular Std;
  font-style: normal;
  font-weight: 450;
  font-size: 96px;
  line-height: 121px;
  color: #000000;
`;
const StyledInput = styled.input`
  width: 514px;
  height: 63px;
  left: 463px;
  top: 469px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
`;
const StyledLabel = styled.label`
  width: 109px;
  height: 46px;
  left: 463px;
  top: 408px;
  font-family: Circular Std;
  font-style: normal;
  font-weight: 450;
  font-size: 36px;
  line-height: 46px;
  /* identical to box height */
`;
const StyledButton = styled.button`
  width: 376px;
  height: 101px;
  left: 556px;
  top: 847px;
`;

const Login = ({
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
}) => {
  function handleClick(e) {
    setHasAccount(!hasAccount);
  }

  return (
    <StyledDiv>
      <StyledLabel>Email</StyledLabel>
      <StyledInput
        type="text"
        autoFocus
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p className="error message">{emailErr}</p>
      <StyledLabel>Password</StyledLabel>
      <StyledInput
        type="password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <p className="error message">{passwordErr}</p>
      {hasAccount ? (
        <>
          <StyledButton onClick={handleLogin}>Sign In</StyledButton>
          <p>
            Don't have an account?
            <span onClick={handleClick}> Sign Up</span>
          </p>
        </>
      ) : (
        <>
          <StyledButton onClick={handleSignUp}>Sign Up</StyledButton>
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