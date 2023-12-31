import { memo, useContext, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingArabic.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getReadingArabicData,
  getReadingArabicError,
  getReadingArabicIsLoading,
} from '../../model/selectors/readingArabic';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { readingArabicReducer } from '../../model/slice/readingArabicSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';
import { fetchReadingArabic } from '../../model/services/fetchReadingArabic';
import QuranVerse from '../QuranVerse/QuranVerse';
import {
  getSelectedPageRead,
  useSelectedPageReadActions,
} from '@/entities/PageRead';
import { getSelectedSuraRead } from '@/entities/SurahRead';
import SuraNameContainer, {
  SuraNameSize,
} from '@/shared/ui/SuraName/SuraNameContainer';
import Bismillah from '@/shared/ui/Bismillah/Bismillah';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { useInfiniteScrollForRead } from '@/shared/lib/hooks/useInfiniteScrollForRead/useInfiniteScrollForRead';
import { useSelectedPageReadSelectActions } from '@/entities/PageReadSelect';

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    if (
      currentSuraRead?.quran_order &&
      data &&
      !data[currentSuraRead?.quran_order]
    ) {
      dispatch(
        fetchReadingArabic({
          suraId: currentSuraRead?.quran_order,
          pageNumber: currentPageRead.pageNumber,
        }),
      );
    } else if (currentSuraRead?.quran_order && !data) {
      dispatch(
        fetchReadingArabic({
          suraId: currentSuraRead?.quran_order,
          pageNumber: currentPageRead.pageNumber,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSuraRead?.quran_order, dispatch]);

  useEffect(() => {
    if (
      data &&
      !data[currentSuraRead?.quran_order]?.data?.data?.some(
        (verse) => verse.page_number === currentPageRead.pageNumber,
      )
    ) {
      dispatch(
        fetchReadingArabic({
          suraId: currentSuraRead?.quran_order,
          pageNumber: currentPageRead.pageNumber,
        }),
      );
    }

    setSelectedPageReadSelect(currentPageRead.pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageRead?.pageNumber, dispatch]);

  const handleInfiniteScroll = () => {
    // eslint-disable-next-line max-len
    if (
      data &&
      data[currentSuraRead?.quran_order]?.data?.pagination.nextpage &&
      currentPageRead.pageNumber >= currentSuraRead.pages[0] &&
      currentPageRead.pageNumber < currentSuraRead.pages[1]
    ) {
      incrementCurrentPageRead();
    }
  };

  const triggerRef = useInfiniteScrollForRead({
    callback: handleInfiniteScroll,
    threshold: 0,
  });

  const renderContent = useMemo(() => {
    if (isLoading) {
      setFetchIsLoading(isLoading);
      // return <ReadTextSkeleton />;
    }
    if (data) {
      setFetchIsLoading(isLoading);
      return (
        <QuranVerse
          verseData={data[currentSuraRead?.quran_order]?.data?.data}
        />
      );
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
              suraId={`00${currentSuraRead.quran_order}`}
              hasSurahPrefix
              size={SuraNameSize.Large}
            />
          )}

          {!CHAPTERS_WITHOUT_BISMILLAH.includes(
            String(currentSuraRead.quran_order),
          ) && <Bismillah />}
          {renderContent}

          <div className={cls.trigger} ref={triggerRef} />
        </div>
      </div>
    </DynamicModuleLoader>
  );
});
