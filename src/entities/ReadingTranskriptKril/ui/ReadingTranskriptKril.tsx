import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingTranskriptKril.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getReadingTranskriptKrilData,
  getReadingTranskriptKrilError,
  getReadingTranskriptKrilIsLoading,
} from '../model/selectors/readingTranskriptKril';
import { getSelectedPage } from '@/entities/Page';
import { getSelectedSura } from '@/entities/Surah';
import BookBox from '@/shared/ui/BookBox/BookBox';
import BookBoxSkeleton from '@/shared/ui/BookBoxSkeleton/BookBoxSkeleton';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { readingTranskriptKrilReducer } from '../model/slice/readingTranskriptKril';
import { fetchReadingTranskriptKril } from '../model/services/fetchReadingTranskriptKril';

interface ReadingTranskriptKrilProps {
  className?: string;
}

const reducers: ReducersList = {
  readingTranskriptKril: readingTranskriptKrilReducer,
};

export const ReadingTranskriptKril = memo(
  ({ className }: ReadingTranskriptKrilProps) => {
    const dispatch = useAppDispatch();
    const currentSura = useSelector(getSelectedSura);
    const currentPage = useSelector(getSelectedPage);

    const data = useSelector(getReadingTranskriptKrilData);
    const isLoading = useSelector(getReadingTranskriptKrilIsLoading);
    const isError = useSelector(getReadingTranskriptKrilError);

    useEffect(() => {
      if (currentSura?.quran_order && data && !data[currentSura?.quran_order]) {
        dispatch(
          fetchReadingTranskriptKril({
            suraId: currentSura?.quran_order,
            pageNumber: currentPage.pageNumber,
            limitOfPage: 1,
          }),
        );
      } else if (currentSura?.quran_order && !data) {
        dispatch(
          fetchReadingTranskriptKril({
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
          fetchReadingTranskriptKril({
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
          className={classNames(cls.ReadingTranskriptKril, {}, [className])}
        >
          <div
            className={classNames(cls.ReadingTranskriptKril__readBox, {}, [
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
