import { HACKER_NEWS_API_BASE_URL } from './constants/apiUrls';
import NewsList from './components/NewsList/NewsList';

async function fetchTopStoryIds(): Promise<number[]> {
  const response = await fetch(
    `${HACKER_NEWS_API_BASE_URL}/v0/topstories.json`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Home() {
  const topStoryIds = await fetchTopStoryIds();
  return <NewsList topStoryIds={topStoryIds} />;
}
