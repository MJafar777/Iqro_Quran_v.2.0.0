import { memo, useContext, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingArabic.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

import Bismillah from '@/shared/ui/Bismillah/Bismillah';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { useSelectedPageReadSelectActions } from '@/entities/PageReadSelect';

import {
  getSelectedPageRead,
  useSelectedPageReadActions,
} from '@/entities/PageRead';
import { getSelectedSuraRead } from '@/entities/SurahRead';
import SuraNameContainer, {
  SuraNameSize,
} from '@/shared/ui/SuraName/SuraNameContainer';
import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import QuranPages from '../QuranPages/QuranPages';

import {
  getReadingArabicData,
  getReadingArabicError,
  getReadingArabicIsLoading,
} from '../../model/selectors/readingArabic';
import { readingArabicReducer } from '../../model/slice/readingArabicSlice';
import { fetchReadingArabic } from '../../model/services/fetchReadingArabic';

// import { useInfiniteScrollForRead } from '@/shared/lib/hooks/useInfiniteScrollForRead/useInfiniteScrollForRead';

const CHAPTERS_WITHOUT_BISMILLAH = ['1', '9'];
interface ReadingArabicProps {
  className?: string;
}

const reducers: ReducersList = {
  readingArabic: readingArabicReducer,
};

export const ReadingArabic = memo(({ className }: ReadingArabicProps) => {
  const dispatch = useAppDispatch();
  const currentSuraRead = useSelector(getSelectedSuraRead);
  const currentPageRead = useSelector(getSelectedPageRead);
  const { incrementCurrentPageRead } = useSelectedPageReadActions();
  const { setFetchIsLoading } = useContext(ButtonsContext);
  const { setSelectedPageReadSelect } = useSelectedPageReadSelectActions();

  const data = useSelector(getReadingArabicData);
  const isLoading = useSelector(getReadingArabicIsLoading);
  const isError = useSelector(getReadingArabicError);

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });

  // if (
  //   currentSuraRead?.quran_order &&
  //   data &&
  //   !data[currentSuraRead?.quran_order]
  // ) {
  //   dispatch(
  //     fetchReadingArabic({
  //       suraId: currentSuraRead?.quran_order,
  //       pageNumber: currentPageRead.pageNumber,
  //     }),
  //   );
  // } else if (currentSuraRead?.quran_order && !data) {
  // dispatch(
  //   fetchReadingArabic({
  //     suraId: currentSuraRead?.quran_order,
  //     pageNumber: currentPageRead.pageNumber,
  //   }),
  // );
  // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentSuraRead?.quran_order, dispatch]);

  useEffect(() => {
    if (
      !(
        data &&
        data[currentPageRead?.pageNumber] &&
        data[currentPageRead?.pageNumber][currentSuraRead?.quran_order]
      )
    ) {
      if (
        currentSuraRead?.pages[0] <= currentPageRead.pageNumber &&
        currentSuraRead?.pages[1] >= currentPageRead.pageNumber
      ) {
        dispatch(
          fetchReadingArabic({
            suraId: currentSuraRead?.quran_order,
            pageNumber: currentPageRead.pageNumber,
          }),
        );
      }
    }

    setSelectedPageReadSelect(currentPageRead.pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageRead.pageNumber, currentSuraRead?.quran_order, dispatch]);

  // const handleInfiniteScroll = () => {
  //   // eslint-disable-next-line max-len
  //   if (
  //     data &&
  //     data[currentSuraRead?.quran_order]?.data?.pagination.nextpage &&
  //     currentPageRead.pageNumber >= currentSuraRead.pages[0] &&
  //     currentPageRead.pageNumber < currentSuraRead.pages[1]
  //   ) {
  //     incrementCurrentPageRead();
  //   }
  // };

  // const triggerRef = useInfiniteScrollForRead({
  //   callback: handleInfiniteScroll,
  //   threshold: 0,
  // });

  const renderContent = useMemo(() => {
    if (isLoading) {
      setFetchIsLoading(isLoading);
    }
    if (data) {
      // setFetchIsLoading(isLoading);
      return <QuranPages pagesData={data} />;
      // eslint-disable-next-line no-else-return
    } else if (isError) {
      return (
        <ReadingQuranErrorDialog isErrorProps={!false} errorProps={isError} />
      );
    } else {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, data, isError, currentSuraRead?.quran_order]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div
        data-testid="reading-arabic"
        className={classNames(cls.ReadingArabic, {}, [className])}
      >
        <div
          className={classNames(cls.ReadingArabic__readBox, {}, [className])}
        >
          {data && (
            <SuraNameContainer
              suraId={
                String(currentSuraRead.quran_order)?.length === 1
                  ? `00${currentSuraRead.quran_order}`
                  : String(currentSuraRead.quran_order)?.length === 2
                  ? `0${currentSuraRead.quran_order}`
                  : String(currentSuraRead.quran_order)
              }
              hasSurahPrefix
              size={SuraNameSize.Large}
            />
          )}

          {!CHAPTERS_WITHOUT_BISMILLAH.includes(
            String(currentSuraRead.quran_order),
          ) && <Bismillah />}
          {renderContent}

          {/* <div className={cls.trigger} ref={triggerRef} /> */}
        </div>
      </div>
    </DynamicModuleLoader>
  );
});
