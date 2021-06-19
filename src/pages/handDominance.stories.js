import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import ChooseDomHand from './handDominance';

storiesOf('ChooseDomHand/handDominance', module)
  .add('main', () => <ChooseDomHand />)
  
