import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingTranslateKril.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getReadingTranslateKrilData,
  getReadingTranslateKrilError,
  getReadingTranslateKrilIsLoading,
} from '../model/selectors/readingTranslateKril';
import { getSelectedPage } from '@/entities/Page';
import { getSelectedSura } from '@/entities/Surah';
import BookBox from '@/shared/ui/BookBox/BookBox';
import BookBoxSkeleton from '@/shared/ui/BookBoxSkeleton/BookBoxSkeleton';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { readingTranslateKrilReducer } from '../model/slice/readingTranslateKril';
import { fetchReadingTranslateKril } from '../model/services/fetchReadingTranslateKril';

interface ReadingTranslateKrilProps {
  className?: string;
}

const reducers: ReducersList = {
  readingTranslateKril: readingTranslateKrilReducer,
};

export const ReadingTranslateKril = memo(
  ({ className }: ReadingTranslateKrilProps) => {
    const dispatch = useAppDispatch();
    const currentSura = useSelector(getSelectedSura);
    const currentPage = useSelector(getSelectedPage);

    const data = useSelector(getReadingTranslateKrilData);
    const isLoading = useSelector(getReadingTranslateKrilIsLoading);
    const isError = useSelector(getReadingTranslateKrilError);

    useEffect(() => {
      if (currentSura?.quran_order && data && !data[currentSura?.quran_order]) {
        dispatch(
          fetchReadingTranslateKril({
            suraId: currentSura?.quran_order,
            pageNumber: currentPage.pageNumber,
            limitOfPage: 1,
          }),
        );
      } else if (currentSura?.quran_order && !data) {
        dispatch(
          fetchReadingTranslateKril({
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
          fetchReadingTranslateKril({
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
          className={classNames(cls.ReadingTranslateKril, {}, [className])}
        >
          <div
            className={classNames(cls.ReadingTranslateKril__readBox, {}, [
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
