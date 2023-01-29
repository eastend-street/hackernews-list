'use client';
import News from '../components/News';
import useFetchStories from '../hooks/useFetchStories';

export default function Home() {
  const { stories, fetchStories } = useFetchStories();
  return (
    <ul>
      {stories.map((story, index) => (
        <li key={story.id} className="my-2">
          <News
            story={story}
            index={index}
            isLastStory={index === stories.length - 1}
            fetchNextStories={() => fetchStories(index + 1)}
          />
        </li>
      ))}
    </ul>
  );
}
