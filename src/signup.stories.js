import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import SignUp from "./signup"

storiesOf('Signup/Login/main', module)
  .add('large', () => <SignUp />)
  