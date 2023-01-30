import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import NewsList from './NewsList';

const topStoryIds = [34547259, 34546273, 34570264];

export default {
  title: 'components/NewsList',
  component: NewsList,
  args: {
    topStoryIds: topStoryIds,
  },
} as Meta;

const Template: StoryFn<typeof NewsList> = (args) => <NewsList {...args} />;

export const Default = Template.bind({});
