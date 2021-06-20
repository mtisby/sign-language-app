import React, { Component } from "react";
import styled from "styled-components";
const StyledH1 = styled.h1`
  position: absolute;
  width: 313px;
  height: 121px;
  left: 564px;
  top: 365px;
`;
const StyledH3 = styled.h3`
  position: absolute;
  width: 768px;
  height: 61px;
  left: 336px;
  top: 512px;

  line-height: 61px;
  /* identical to box height */

  color: #ffffff;
`;
const StyleedBtn = styled.button`
  padding:12px 24px,
  font-weight: 700,
  border: none,
  cursor: pointer,
  display: inline-block,
  line-height: 1,
`;
const SplashPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")`,
        width: "100%",
        height: "100%",
      }}
    >
      <h1>signum</h1>
      <h3>asl made personal and easy using ai</h3>

      <StyleedBtn>let's learn</StyleedBtn>
    </div>
  );
};

export default SplashPage;
