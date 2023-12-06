import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingArabicBook.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getReadingArabicBookData,
  getReadingArabicBookError,
  getReadingArabicBookIsLoading,
} from '../model/selectors/readingArabicBook';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { readingArabicBookReducer } from '../model/slice/readingArabicBookSlice';
import { getSelectedSura } from '@/entities/Surah';
import { getSelectedPage } from '@/entities/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import BookBoxSkeleton from '@/shared/ui/BookBoxSkeleton/BookBoxSkeleton';
import BookBox from '@/shared/ui/BookBox/BookBox';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';
import { fetchReadingArabicBook } from '../model/services/fetchReadingArabicBook';

interface ReadingArabicBookProps {
  className?: string;
}

const reducers: ReducersList = {
  readingArabicBook: readingArabicBookReducer,
};

export const ReadingArabicBook = memo(
  ({ className }: ReadingArabicBookProps) => {
    const dispatch = useAppDispatch();
    const currentSura = useSelector(getSelectedSura);
    const currentPage = useSelector(getSelectedPage);

    const data = useSelector(getReadingArabicBookData);
    const isLoading = useSelector(getReadingArabicBookIsLoading);
    const isError = useSelector(getReadingArabicBookError);

    useEffect(() => {
      if (currentSura?.quran_order && data && !data[currentSura?.quran_order]) {
        dispatch(
          fetchReadingArabicBook({
            suraId: currentSura?.quran_order,
            pageNumber: currentPage.pageNumber,
            limitOfPage: 1,
          }),
        );
      } else if (currentSura?.quran_order && !data) {
        dispatch(
          fetchReadingArabicBook({
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
          fetchReadingArabicBook({
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
          data-testid="reading-book-arabic"
          className={classNames(cls.ReadingArabicBook, {}, [className])}
        >
          <div
            className={classNames(cls.ReadingArabicBook__readBox, {}, [
              className,
            ])}
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
  },
);
