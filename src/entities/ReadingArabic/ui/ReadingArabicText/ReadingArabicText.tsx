import { memo, useEffect, useMemo } from 'react';
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
import { getSelectedSura } from '@/entities/Surah';
import { getSelectedPage } from '@/entities/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import BookBoxSkeleton from '@/shared/ui/BookBoxSkeleton/BookBoxSkeleton';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';
import { fetchReadingArabic } from '../../model/services/fetchReadingArabic';
import QuranVerse from '../QuranVerse/QuranVerse';
// import useQcfFontRead from '@/shared/lib/hooks/useQcfFontRead/useQcfFontRead';

interface ReadingArabicProps {
  className?: string;
}

const reducers: ReducersList = {
  readingArabic: readingArabicReducer,
};

export const ReadingArabic = memo(({ className }: ReadingArabicProps) => {
  const dispatch = useAppDispatch();
  const currentSura = useSelector(getSelectedSura);
  const currentPage = useSelector(getSelectedPage);

  const data = useSelector(getReadingArabicData);
  const isLoading = useSelector(getReadingArabicIsLoading);
  const isError = useSelector(getReadingArabicError);

  useEffect(() => {
    if (currentSura?.quran_order && data) {
      dispatch(
        fetchReadingArabic({
          suraId: currentSura?.quran_order,
          pageNumber: currentPage.pageNumber,
          limitOfPage: 10,
        }),
      );
    } else if (currentSura?.quran_order && !data) {
      dispatch(
        fetchReadingArabic({
          suraId: currentSura?.quran_order,
          pageNumber: currentPage.pageNumber,
          limitOfPage: 10,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSura?.quran_order, dispatch]);

  useEffect(() => {
    if (currentSura?.quran_order) {
      dispatch(
        fetchReadingArabic({
          suraId: currentSura?.quran_order,
          pageNumber: currentPage.pageNumber,
          limitOfPage: 10,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, dispatch]);

  const renderContent = useMemo(() => {
    if (isLoading) {
      return <BookBoxSkeleton />;
    }
    if (data) {
      return (
        <QuranVerse verseData={data[currentSura?.quran_order]?.data?.data} />
      );
      // eslint-disable-next-line no-else-return
    } else if (isError) {
      return (
        <ReadingQuranErrorDialog isErrorProps={!false} errorProps={isError} />
      );
    } else {
      return null;
    }
  }, [isLoading, data, isError, currentSura?.quran_order]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div
        data-testid="reading-arabic"
        className={classNames(cls.ReadingArabic, {}, [className])}
      >
        <div
          className={classNames(cls.ReadingArabic__readBox, {}, [className])}
        >
          {renderContent}
        </div>
      </div>
    </DynamicModuleLoader>
  );
});
