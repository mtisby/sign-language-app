import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import CategoriesHome from './categoriesHomePage';

storiesOf('CategoriesHome/categories', module)
  .add('main', () => <CategoriesHome />)
  
