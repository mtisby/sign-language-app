import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Quiz from "./quiz";

storiesOf('Quiz/main', module)
  .add('large', () => <Quiz />)
  