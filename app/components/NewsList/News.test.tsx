import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './News.stories';

const { Default, WithoutUrl, LastStory } = composeStories(stories);

describe('components/News', () => {
  test('should render News component', () => {
    const { container } = render(<Default />);
    const newsAnchorElement = screen.getByRole('link', {
      name: /Forking Chrome to render in a terminal/i,
    });
    expect(newsAnchorElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should have index number with title', () => {
    render(<Default />);
    const newsAnchorElement = screen.getByRole('link', {
      name: /1. Forking Chrome to render in a terminal/i,
    });
    expect(newsAnchorElement).toBeInTheDocument();
  });

  test('should have the news URL as href', () => {
    render(<Default />);
    const newsAnchorElement = screen.getByRole('link', {
      name: /Forking Chrome to render in a terminal/i,
    });
    expect(newsAnchorElement).toHaveAttribute(
      'href',
      'https://fathy.fr/carbonyl'
    );
  });

  test('should have the news.ycombinator.com as href when the story does not have an URL', () => {
    render(<WithoutUrl />);
    const newsAnchorElement = screen.getByRole('link', {
      name: /Ask HN: Why isn't radiation used to sterilize raw foods (like sashimi, eggs)?/i,
    });
    expect(newsAnchorElement).toHaveAttribute(
      'href',
      'https://news.ycombinator.com/item?id=34573675'
    );
  });
});
