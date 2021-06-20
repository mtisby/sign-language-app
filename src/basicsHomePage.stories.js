import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BasicHome from './basicsHomePage';

storiesOf('BasicHome/basic', module)
  .add('main', () => <BasicHome />)
  
