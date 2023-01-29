const HACKER_NEWS_API_URL = 'https://hacker-news.firebaseio.com';

interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: 'story';
  url: string;
}

const fetchTopStoryIds = async (): Promise<number[]> => {
  const response = await fetch(`${HACKER_NEWS_API_URL}/v0/topstories.json`);
  return response.json();
};

const fetchStoryById = async (storyId: number): Promise<Story> => {
  const response = await fetch(
    `${HACKER_NEWS_API_URL}/v0/item/${storyId}.json`
  );
  return response.json();
};

const fetchTopStories = async (): Promise<Story[]> => {
  const topStoryIds = await fetchTopStoryIds();
  const topStories = await Promise.all(
    topStoryIds.map((storyId) => fetchStoryById(storyId))
  );

  return topStories;
};

export default async function Home() {
  const topStories = await fetchTopStories();
  return (
    <ul>
      {topStories.map((story, index) => (
        <li key={story.id} className="my-1">
          <a href={story.url} target="_blank" rel="noreferrer">
            {index + 1}. {story.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
