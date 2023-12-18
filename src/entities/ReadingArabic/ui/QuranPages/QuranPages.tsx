import React, { memo, useContext, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import cls from './QuranPages.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Surah } from '../../model/types/readingSura';

import { getSelectedPageRead } from '@/entities/PageRead';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { useSelectedPageReadSelectActions } from '@/entities/PageReadSelect';

interface QuranPagesProps {
  className?: string;
  suraData: Surah;
}

const QuranPages = memo(({ className, suraData }: QuranPagesProps) => {
  const parentRef = useRef<HTMLDivElement>(null);

  console.log(suraData);

  const { fetchIsLoading } = useContext(ButtonsContext);
  const currentPageRead = useSelector(getSelectedPageRead);
  const { setSelectedPageReadSelect } = useSelectedPageReadSelectActions();

  // useQcfFontRead(verseData);

  useEffect(() => {
    // ...
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
    // ...

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
      {/* {fetchIsLoading ? (
        <>
          {Object.values(rowObj).map((verse, index) => (
            <QuranPage pageData={verse} key={index} isLoading={false} />
          ))}
          <div
            className={classNames(cls.QuranPages__skeloton, {}, [className])}
          >
            <ReadTextSkeleton />
          </div>
        </>
      ) : (
        Object.values(rowObj).map((verse, index) => (
          <QuranPage pageData={verse} key={index} isLoading={false} />
        ))
      )} */}
    </div>
  );
});

export default QuranPages;
