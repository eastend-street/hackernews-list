import { render, screen, waitFor, within } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import '@/mocks/intersectionObserverMock';
import * as stories from './NewsList.stories';

const { Default } = composeStories(stories);

describe('components/NewsList', () => {
  test('should render NewsList component', async () => {
    const { container } = render(<Default />);

    await waitFor(() => {
      const list = screen.getByRole('list');
      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');
      expect(items.length).toBe(3);
    });
    expect(container).toMatchSnapshot();
  });

  test('should render 3 top stories', async () => {
    render(<Default />);
    await waitFor(() => {
      [
        '1. Forking Chrome to render in a terminal',
        '2. Evidence of Multicellularity in Single Cell Organism',
        '3. For longevity, muscle strength may be as important as aerobic exercise',
      ].forEach((title) => {
        const newsAnchorElement = screen.getByRole('link', {
          name: title,
        });
        expect(newsAnchorElement).toBeInTheDocument();
      });
    });
  });
});
