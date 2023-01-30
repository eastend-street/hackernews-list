import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Header.stories';

const { Default: Header } = composeStories(stories);

describe('components/Header', () => {
  test('should render Header component', () => {
    const { container } = render(<Header />);

    const heading1 = screen.getByRole('heading', {
      name: /Hacker News List/i,
      level: 1,
    });

    expect(heading1).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
