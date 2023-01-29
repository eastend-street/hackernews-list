'use client';
import News from './News';
import Skeleton from '../Skeleton';
import useFetchStories from './useFetchStories';

export default function NewsList({ topStoryIds }: { topStoryIds: number[] }) {
  const { stories, isLoading, fetchStories } = useFetchStories({ topStoryIds });

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
      {isLoading && <Skeleton numOfSkeletons={100} />}
    </ul>
  );
}
