import React, { Component } from 'react';
import {Button} from '@geist-ui/react';
const WelcomePage = () => {
    return (
        <div style={{ height: "100%",
            width: "100%",
            display: "flex",
            position: "fixed",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundImage: `url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")`}}>
        <h1>Welcome! Let's get started!
        <br></br> <br></br>
        <center> <Button style={{ height: "100%",
            backgroundColor: "#B2D0DF",
            color: "white"
            }}>Continue</Button></center>
        </h1> 
        </div>
    );
}

export default WelcomePage;