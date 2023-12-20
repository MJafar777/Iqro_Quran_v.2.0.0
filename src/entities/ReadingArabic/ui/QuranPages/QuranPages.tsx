import React, { memo, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import cls from './QuranPages.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

import QuranPage from '../QuranPage/QuranPage';

import { getSelectedPageRead } from '@/entities/PageRead';
import { getSelectedSuraRead } from '@/entities/SurahRead';
import { useSelectedPageReadSelectActions } from '@/entities/PageReadSelect';
import ReadTextSkeleton from '@/shared/ui/ReadTextSkeleton/ReadTextSkeleton';

import { Pages } from '../../model/types/readingSura';

interface QuranPagesProps {
  className?: string;
  pagesData: Pages;
}

const QuranPages = memo(({ className, pagesData }: QuranPagesProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const currentSuraRead = useSelector(getSelectedSuraRead);
  const currentPageRead = useSelector(getSelectedPageRead);
  const { setSelectedPageReadSelect } = useSelectedPageReadSelectActions();

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current) {
        const parentTop = parentRef.current.getBoundingClientRect().top;

        // Iterate through child divs to find the visible one
        const childDivs = parentRef.current.querySelectorAll(
          '[data-testid="QuranPage"]',
        );
        childDivs.forEach((childDiv) => {
          const childTop = childDiv.getBoundingClientRect().top;

          // Check if the child div is visible
          if (childTop >= parentTop && childTop < window.innerHeight) {
            const childId = childDiv.getAttribute('id');
            setSelectedPageReadSelect(Number(childId));
          }
        });
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setSelectedPageReadSelect]);

  return (
    <div
      ref={parentRef}
      data-testid="QuranPages"
      style={{ height: '100%', overflowY: 'scroll' }}
      className={classNames(cls.QuranPages, {}, [className])}
    >
      {pagesData &&
      pagesData[currentPageRead?.pageNumber] &&
      pagesData[currentPageRead?.pageNumber][currentSuraRead?.quran_order] ? (
        <QuranPage
          pageData={
            pagesData[currentPageRead?.pageNumber][currentSuraRead?.quran_order]
          }
          isLoading={false}
        />
      ) : (
        <ReadTextSkeleton />
      )}
    </div>
  );
});

export default QuranPages;
