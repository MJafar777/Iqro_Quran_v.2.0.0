/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, {
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import cls from './QuranPages.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Surah } from '../../model/types/readingSura';
import QuranPage from '../QuranPage/QuranPage';
import {
  getSelectedPageRead,
  useSelectedPageReadActions,
} from '@/entities/PageRead';
import { useSelectedPageReadSelectActions } from '@/entities/PageReadSelect';
import { getSelectedPage } from '@/entities/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSelectedSura } from '@/entities/Surah';
import {
  getReadingArabicData,
  getReadingArabicIsLoading,
} from '../../model/selectors/readingArabic';
import ReadTextSkeleton from '@/shared/ui/ReadTextSkeleton/ReadTextSkeleton';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface QuranPagesProps {
  className?: string;
}

const QuranPages = memo(({ className }: QuranPagesProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [surahPages, setSurahPages] = useState<Surah[]>();
  const { incrementCurrentPageRead } = useSelectedPageReadActions();
  const [oldData, setOldData] = useState<Surah[]>();
  const [newData, setNewData] = useState<Surah[]>([]);
  const { setSelectedPageReadSelect } = useSelectedPageReadSelectActions();
  const { setSelectedPageRead } = useSelectedPageReadActions();

  const dispatch = useAppDispatch();
  const { fetchIsLoading } = useContext(ButtonsContext);

  const data = useSelector(getReadingArabicData);
  const currentSura = useSelector(getSelectedSura);
  const currentPageReadInSurah = useSelector(getSelectedPage);
  const currentPageReadInQuran = useSelector(getSelectedPageRead);
  const isLoding = useSelector(getReadingArabicIsLoading);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log('dfghjkl');

  //     if (parentRef.current) {
  //       const parentTop = parentRef.current.getBoundingClientRect().top;

  //       // Iterate through child divs to find the visible one
  //       const childDivs = parentRef.current.querySelectorAll(
  //         '[data-testid="QuranPage"]',
  //       );
  //       childDivs.forEach((childDiv) => {
  //         const childTop = childDiv.getBoundingClientRect().top;

  //         // Check if the child div is visible
  //         if (childTop >= parentTop && childTop < window.innerHeight) {
  //           const childId = childDiv.getAttribute('id');
  //           setSelectedPageReadSelect(Number(childId));
  //         }
  //       });
  //     }
  //   };
  //   // ...

  //   // Attach the scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [setSelectedPageReadSelect]);

  useEffect(() => {
    console.log('dfghjkl');

    dispatch(
      setSelectedPageRead(
        currentSura.pages[0] + currentPageReadInSurah.pageNumber - 1,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageReadInSurah.pageNumber]);

  const pages = useMemo(() => {
    // @ts-ignore
    return Object.values(data)
      .map((page) => page[currentSura.quran_order])
      ?.map((page) => {
        if (page) {
          return <QuranPage pageData={page?.linesV1} isLoading={false} />;
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(isLoding, 'isloadin');

  return (
    <div
      data-testid="QuranPages"
      className={classNames(cls.QuranPages, {}, [className])}
    >
      {/* {pages} */}

      {fetchIsLoading ? (
        <div className={classNames(cls.QuranPages__skeloton, {}, [className])}>
          <ReadTextSkeleton />
        </div>
      ) : (
        // eslint-disable-next-line consistent-return
        Object.values(data!)
          .map((page) => page[currentSura.quran_order])
          ?.map((page) => {
            if (page) {
              return <QuranPage pageData={page?.linesV1} isLoading={false} />;
            }
          })
      )}
    </div>
  );
});

export default QuranPages;
