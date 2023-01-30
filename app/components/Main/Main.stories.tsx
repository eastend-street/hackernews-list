import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Main from './Main';

export default {
  title: 'components/Main',
  component: Main,
} as Meta;

const Template: StoryFn<typeof Main> = () => <Main>Main Content</Main>;

export const Default = Template.bind({});
