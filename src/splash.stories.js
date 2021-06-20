import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import SplashPage from './splash';

storiesOf('SplashPage/splash', module)
  .add('main', () => <SplashPage />)
  
