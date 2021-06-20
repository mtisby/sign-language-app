import React, { Component } from 'react';
import {Grid,Container} from '@geist-ui/react';
const WelcomePage = () => {
    return (
        <div style={{backgroundImage: `url("https://github.com/ismatullaevash/sign-language-app/blob/main/static/mesh-gradient.png?raw=true")`}}>
        <Grid.Container gap={2} justify="center">
        <Grid xs></Grid>
        <Grid xs></Grid>
        <Grid xs></Grid>
      </Grid.Container>
      <Grid.Container gap={2} justify="center">
        <Grid xs></Grid>
        <Grid xs={12}><h1>welcome! let's get started.</h1></Grid>
        <Grid xs></Grid>
      </Grid.Container>
        
        </div>
    );
}

export default WelcomePage;