import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './QuranPages.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Surah } from '../../model/types/readingSura';
import QuranPage from '../QuranPage/QuranPage';
import { useSelectedPageReadActions } from '@/entities/PageRead';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import ReadTextSkeleton from '@/shared/ui/ReadTextSkeleton/ReadTextSkeleton';
import { useSelectedPageReadSelectActions } from '@/entities/PageReadSelect';
import { getSelectedPage, useSelectedPageActions } from '@/entities/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSelectedSura } from '@/entities/Surah';
import { getReadingArabicData } from '../../model/selectors/readingArabic';

interface QuranPagesProps {
  className?: string;
  suraData: Surah;
}

const QuranPages = memo(({ className, suraData }: QuranPagesProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const currentSura = useSelector(getSelectedSura);

  const { fetchIsLoading, audioUrl } = useContext(ButtonsContext);
  const { setSelectedPageReadSelect } = useSelectedPageReadSelectActions();
  const { setSelectedPageRead } = useSelectedPageReadActions();
  const { setSelectedPage } = useSelectedPageActions();
  const currentPageRead = useSelector(getSelectedPage);
  const data = useSelector(getReadingArabicData);
  const dispatch = useAppDispatch();
  const surahId = useSelector(getSelectedSura);
  const [surahPages, setSurahPages] = useState<Surah[]>();

  useEffect(() => {
    if (data) {
      // @ts-ignore
      setSurahPages(
        Object.values(data).map((page) => page[surahId.quran_order]),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setSurahPages([]);
  }, [surahId.quran_order]);

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

  useEffect(() => {
    dispatch(
      setSelectedPageRead(
        currentSura.pages[0] + currentPageRead.pageNumber - 1,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageRead.pageNumber]);

  return (
    <div
      ref={parentRef}
      data-testid="QuranPages"
      style={{ height: '100%', overflowY: 'scroll' }}
      className={classNames(cls.QuranPages, {}, [className])}
    >
      {fetchIsLoading ? (
        <>
          {/* {Object.values(suraData).map((verse, index) => (
            <QuranPage pageData={verse} key={index} isLoading={false} />
          ))} */}
          <div
            className={classNames(cls.QuranPages__skeloton, {}, [className])}
          >
            <ReadTextSkeleton />
          </div>
        </>
      ) : (
        <QuranPage pageData={suraData?.linesV1} isLoading={false} />
      )}
    </div>
  );
});

export default QuranPages;
