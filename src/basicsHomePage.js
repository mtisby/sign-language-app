import React, { Component } from 'react';
import {Button} from '@geist-ui/react';

const BasicHome = () => {
    return (
        <div style={{ height: "100%",
            width: "100%",
            display: "flex",
            position: "fixed",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundImage: `url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")`}}>
        <h1><center>Basics</center>
        <br></br> 
        <span>Start with the essentials follow along with the hand</span>  
        <br></br><br></br>
        <center> <Button style={{ height: "100%",
            backgroundColor: "#B2D0DF",
            color: "white"
            }}>Turn on webcam!</Button></center>
        </h1> 
        </div>
    );
}

export default BasicHome;