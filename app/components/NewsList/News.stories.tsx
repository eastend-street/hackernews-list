import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Story } from '../../types/story';
import News from './News';

const SampleStory: Story = {
  by: 'fathyb',
  descendants: 118,
  id: 34547259,
  kids: [
    34551288, 34551446, 34551381, 34550957, 34551363, 34559705, 34555437,
    34551359, 34555330, 34553959, 34555234, 34551216, 34553932, 34554496,
    34550988, 34551329, 34556751, 34552308, 34554057, 34551839, 34555521,
    34551266, 34554867, 34555869, 34558878, 34565307, 34554879, 34554925,
    34551236, 34554295, 34560377, 34556853, 34552908, 34554839, 34555318,
    34555085, 34552511, 34554302, 34555641, 34555784, 34555951, 34552526,
    34556686, 34556041, 34551835, 34551513,
  ],
  score: 1137,
  time: 1674834120,
  title: 'Forking Chrome to render in a terminal',
  type: 'story',
  url: 'https://fathy.fr/carbonyl',
};

const SampleStoryWithoutUrl: Story = {
  by: 'apatheticonion',
  descendants: 27,
  id: 34573675,
  kids: [
    34573852, 34573751, 34573900, 34574045, 34574025, 34573767, 34574084,
    34573777, 34574152, 34573846, 34573756, 34573933, 34574156, 34574063,
  ],
  score: 13,
  text: 'In an effort to avoid food poisoning from the more persistent pathogens (like salmonella, e.coli, and other such stomach-acid-surviving bugs), why aren&#x27;t short bursts of radiation used to sterilize raw foods?<p>We go to great lengths to ensure a safe food supply, like processors washing chicken in bleach, washing eggs and massive doses of antibiotics. Despite these efforts, outbreaks are not uncommon. Even vegetables like bean sprouts and onions are commonly associated with outbreaks.<p>Made me wonder, why don&#x27;t we just blast food with a short burst of radiation before&#x2F;after packing?<p>Or if it is used, why isn&#x27;t it more common?',
  time: 1675033047,
  title:
    "Ask HN: Why isn't radiation used to sterilize raw foods (like sashimi, eggs)?",
  type: 'story',
};

export default {
  title: 'components/News',
  component: News,
  args: {
    story: SampleStory,
    index: 0,
    isLastStory: false,
    fetchNextStories: action('fetchNextStories is called'),
  },
} as Meta;

const Template: StoryFn<typeof News> = (args) => <News {...args} />;

export const Default = Template.bind({});

export const WithoutUrl = Template.bind({});
WithoutUrl.args = {
  story: SampleStoryWithoutUrl,
};

export const LastStory = Template.bind({});
LastStory.args = {
  isLastStory: true,
};
