import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import WelcomePage from './welcome';

storiesOf('WelcomePage/welcome', module)
  .add('main', () => <WelcomePage />)
  
