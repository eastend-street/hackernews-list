/**
 * Mock function for IntersectionObserver which is in /app/components/NewsList/News.tsx for infinite loading.
 * But since IntersectionObserver doesn't exist on Jest, use this mock instead.
 */
export const intersectionObserverMock = () => ({
  observe: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
