import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingArabic.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getReadingArabicData,
  getReadingArabicError,
  getReadingArabicIsLoading,
} from '../model/selectors/readingArabic';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { readingArabicReducer } from '../model/slice/readingArabicSlice';
import { getSelectedSura } from '@/entities/Surah';
import { getSelectedPage } from '@/entities/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import BookBoxSkeleton from '@/shared/ui/BookBoxSkeleton/BookBoxSkeleton';
import BookBox from '@/shared/ui/BookBox/BookBox';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';
import { fetchReadingArabic } from '../model/services/fetchReadingArabic';

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
    if (currentSura?.quran_order && data && !data[currentSura?.quran_order]) {
      dispatch(
        fetchReadingArabic({
          suraId: currentSura?.quran_order,
          pageNumber: currentPage.pageNumber,
          limitOfPage: 1,
        }),
      );
    } else if (currentSura?.quran_order && !data) {
      dispatch(
        fetchReadingArabic({
          suraId: currentSura?.quran_order,
          pageNumber: currentPage.pageNumber,
          limitOfPage: 1,
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
          limitOfPage: 1,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div
        data-testid="reading-arabic"
        className={classNames(cls.ReadingArabic, {}, [className])}
      >
        <div
          className={classNames(cls.ReadingArabic__readBox, {}, [className])}
        >
          {isLoading ? (
            <BookBoxSkeleton />
          ) : data && data[currentSura?.quran_order]?.data.resourse ? (
            <BookBox
              imgUrl={`${
                data[currentSura?.quran_order]?.data.resourse[
                  currentPage.pageNumber - 1
                ]
              }`}
            />
          ) : isError ? (
            <ReadingQuranErrorDialog
              isErrorProps={!false}
              errorProps={isError}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </DynamicModuleLoader>
  );
});
