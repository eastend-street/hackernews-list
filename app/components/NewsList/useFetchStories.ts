import { useState, useEffect, useCallback } from 'react';
import { HACKER_NEWS_API_BASE_URL } from '../../constants/apiUrls';
import { Story } from '../../types/story';

export default function useFetchStories({
  topStoryIds,
}: {
  topStoryIds: number[];
}) {
  const [stories, setStories] = useState<Story[]>([]);
  const fetchStoryById = useCallback(
    async (storyId: number): Promise<Story> => {
      const response = await fetch(
        `${HACKER_NEWS_API_BASE_URL}/v0/item/${storyId}.json`
      );
      return response.json();
    },
    []
  );

  const fetchStories = useCallback(
    (startIndex: number) => {
      if (startIndex >= topStoryIds.length) return;
      Promise.all(
        topStoryIds
          .slice(startIndex, startIndex + 100)
          .map((storyId) => fetchStoryById(storyId))
      ).then((stories) => {
        setStories((prevState) => [...prevState, ...stories]);
      });
    },
    [topStoryIds, fetchStoryById, setStories]
  );

  useEffect(() => {
    fetchStories(0);
  }, [topStoryIds, fetchStories]);

  return {
    stories,
    fetchStories,
  };
}
