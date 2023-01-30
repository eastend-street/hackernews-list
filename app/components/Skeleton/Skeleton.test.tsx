import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Skeleton.stories';

const { Default } = composeStories(stories);

describe('components/Skeleton', () => {
  test('should render Skeleton component', () => {
    const { container } = render(<Default />);

    const skeletonElement = screen.getByRole('status');

    expect(skeletonElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should render Loading... only for screen readers', () => {
    render(<Default />);
    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
  });

  test('should render 10 skeleton nodes', () => {
    render(<Default />);

    [...Array(10)].forEach((_, index) => {
      const skeletonNode = screen.getByTestId(`skeleton-node-${index}`);
      expect(skeletonNode).toBeInTheDocument();
    });
  });
});
