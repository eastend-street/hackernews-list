'use client';
import React, { useEffect, useRef } from 'react';
import { Story } from '../../types/story';

export default function News({
  story,
  index,
  isLastStory,
  fetchNextStories,
}: {
  story: Story;
  index: number;
  isLastStory: boolean;
  fetchNextStories: () => void;
}) {
  const newsRef = useRef(null);

  useEffect(() => {
    if (!newsRef?.current || !isLastStory) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchNextStories();
        observer.unobserve(entry.target);
      }
    });
    observer.observe(newsRef.current);
  }, [isLastStory]);

  return (
    <a
      href={story?.url || `https://news.ycombinator.com/item?id=${story.id}`}
      target="_blank"
      rel="noreferrer"
      ref={newsRef}
      className="hover:underline"
    >
      {index + 1}. {story.title}
    </a>
  );
}
