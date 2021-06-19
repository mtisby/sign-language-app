import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import BadgePage from './badgePage';

storiesOf('BadgePage/badge', module)
  .add('main', () => <BadgePage />)
  
