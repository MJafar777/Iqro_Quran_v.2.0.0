// useInfiniteScroll.ts
import { useRef, useEffect } from 'react';

interface UseInfiniteScrollOptions {
  callback: () => void;
  threshold?: number;
}

export const useInfiniteScrollForRead = ({
  callback,
  threshold = 200,
}: UseInfiniteScrollOptions) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const { current } = triggerRef;

      if (
        current &&
        window.innerHeight + window.scrollY >= current.offsetTop - threshold
      ) {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback, threshold]);

  return triggerRef;
};
