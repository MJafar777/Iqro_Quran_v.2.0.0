import React, { memo, useContext, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import cls from './QuranVerse.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Verse, Word } from '../../model/types/readingSura';
import useQcfFontRead from '../../../../shared/lib/hooks/useQcfFontRead/useQcfFontRead';
import QuranPage from '../QuranPages/QuranPage';
import { getSelectedPageRead } from '@/entities/PageRead';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import ReadTextSkeleton from '@/shared/ui/ReadTextSkeleton/ReadTextSkeleton';
import { useSelectedPageReadSelectActions } from '@/entities/PageReadSelect';

interface QuranVerseProps {
  className?: string;
  verseData: Verse[];
}

interface rowArrType {
  [index: number]: Word[];
}

interface rowObjType {
  [key: number]: rowArrType;
}

const QuranVerse = memo(({ className, verseData }: QuranVerseProps) => {
  const rowObj: rowObjType = {};
  const parentRef = useRef<HTMLDivElement>(null);

  const { fetchIsLoading } = useContext(ButtonsContext);
  const currentPageRead = useSelector(getSelectedPageRead);
  const { setSelectedPageReadSelect } = useSelectedPageReadSelectActions();

  useQcfFontRead(verseData);

  verseData?.forEach((verse) =>
    verse?.words?.forEach((word) => {
      if (!rowObj[word.page_number]) {
        rowObj[word.page_number] = {};
      }

      if (!rowObj[word.page_number][word.line_number]) {
        rowObj[word.page_number][word.line_number] = [];
      }

      rowObj[word.page_number][word.line_number].push(word);
    }),
  );

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
      data-testid="QuranVerse"
      style={{ height: '100%', overflowY: 'scroll' }}
      className={classNames(cls.QuranVerse, {}, [className])}
    >
      {fetchIsLoading ? (
        <>
          {Object.values(rowObj).map((verse, index) => (
            <QuranPage pageData={verse} key={index} isLoading={false} />
          ))}
          <div
            className={classNames(cls.QuranVerse__skeloton, {}, [className])}
          >
            <ReadTextSkeleton />
          </div>
        </>
      ) : (
        Object.values(rowObj).map((verse, index) => (
          <QuranPage pageData={verse} key={index} isLoading={false} />
        ))
      )}
    </div>
  );
});

export default QuranVerse;
