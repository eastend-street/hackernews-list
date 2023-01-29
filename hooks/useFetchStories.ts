import { useState, useEffect, useCallback } from 'react';
import { Story } from '../types/story';
import { HACKER_NEWS_API_BASE_URL } from '../constants/apiUrls';

export default function useFetchStories() {
  const [topStoryIds, setTopStoryIds] = useState<number[]>([]);
  const [stories, setStories] = useState<Story[]>([]);

  const fetchTopStoryIds = useCallback(() => {
    fetch(`${HACKER_NEWS_API_BASE_URL}/v0/topstories.json`)
      .then((res) => res.json())
      .then((storyIds) => {
        setTopStoryIds(storyIds);
      });
  }, [setTopStoryIds]);

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
    fetchTopStoryIds();
  }, [fetchTopStoryIds]);

  useEffect(() => {
    fetchStories(0);
  }, [topStoryIds, fetchStories]);

  return {
    stories,
    fetchStories,
  };
}
