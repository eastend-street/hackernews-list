import { render, screen, waitFor, within } from '@testing-library/react';
import '@/mocks/intersectionObserverMock';
import Home from './page';

describe('pages/Home', () => {
  test('should render Home page with stories after fetching data', async () => {
    render(await Home());
    await waitFor(() => {
      const list = screen.getByRole('list');
      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');
      expect(items.length).toBe(100);
    });
  });

  test('should render skeleton component with 10 nodes before fetching data', async () => {
    render(await Home());

    // Test if the parent skeleton node is shown
    const skeletonElement = screen.getByRole('status');
    expect(skeletonElement).toBeInTheDocument();

    // Test if the child nodes are shown
    [...Array(10)].forEach((_, index) => {
      const skeletonNode = screen.getByTestId(`skeleton-node-${index}`);
      expect(skeletonNode).toBeInTheDocument();
    });
  });
});
