import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Skeleton from './Skeleton';

export default {
  title: 'components/Skeleton',
  component: Skeleton,
  args: {
    numOfSkeletons: 10,
  },
} as Meta;

const Template: StoryFn<typeof Skeleton> = ({ numOfSkeletons }) => (
  <Skeleton numOfSkeletons={numOfSkeletons} />
);

export const Default = Template.bind({});
