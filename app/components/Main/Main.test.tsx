import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Main.stories';

const { Default } = composeStories(stories);

describe('components/Main', () => {
  test('should render Main component', () => {
    const { container } = render(<Default />);

    expect(screen.getByText(/Main Content/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
