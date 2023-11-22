import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingTranskriptLotin.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getReadingTranskriptLotinData,
  getReadingTranskriptLotinError,
  getReadingTranskriptLotinIsLoading,
} from '../model/selectors/readingTranskriptLotin';
import { getSelectedPage } from '@/entities/Page';
import { getSelectedSura } from '@/entities/Surah';
import BookBox from '@/shared/ui/BookBox/BookBox';
import BookBoxSkeleton from '@/shared/ui/BookBoxSkeleton/BookBoxSkeleton';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { readingTranskriptLotinReducer } from '../model/slice/readingTranskriptLotin';
import { fetchReadingTranskriptLotin } from '../model/services/fetchReadingTranskriptLotin';

interface ReadingTranskriptLotinProps {
  className?: string;
}

const reducers: ReducersList = {
  readingTranskriptLotin: readingTranskriptLotinReducer,
};

export const ReadingTranskriptLotin = memo(
  ({ className }: ReadingTranskriptLotinProps) => {
    const dispatch = useAppDispatch();
    const currentSura = useSelector(getSelectedSura);
    const currentPage = useSelector(getSelectedPage);

    const data = useSelector(getReadingTranskriptLotinData);
    const isLoading = useSelector(getReadingTranskriptLotinIsLoading);
    const isError = useSelector(getReadingTranskriptLotinError);

    useEffect(() => {
      if (currentSura?.quran_order && data && !data[currentSura?.quran_order]) {
        dispatch(
          fetchReadingTranskriptLotin({
            suraId: currentSura?.quran_order,
            pageNumber: currentPage.pageNumber,
            limitOfPage: 1,
          }),
        );
      } else if (currentSura?.quran_order && !data) {
        dispatch(
          fetchReadingTranskriptLotin({
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
          fetchReadingTranskriptLotin({
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
          className={classNames(cls.ReadingTranskriptLotin, {}, [className])}
        >
          <div
            className={classNames(cls.ReadingTranskriptLotin__readBox, {}, [
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
