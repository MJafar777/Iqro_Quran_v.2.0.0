import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingTranskriptLotin.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { readingTranskriptLotinReducer } from '../model/slice/readingTranskriptLotin';
import { getSelectedPage } from '@/entities/Page';
import { getSelectedSura } from '@/entities/Surah';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchReadingTranskriptLotin } from '../model/services/fetchReadingTranskriptLotin';

import {
  getReadingTranskriptLotinData,
  getReadingTranskriptLotinError,
  getReadingTranskriptLotinIsLoading,
} from '../model/selectors/readingTranskriptLotin';

import BookBox from '@/shared/ui/BookBox/BookBox';
import BookBoxSkeleton from '@/shared/ui/BookBoxSkeleton/BookBoxSkeleton';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';

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
      if (currentSura?.quran_order) {
        dispatch(
          fetchReadingTranskriptLotin({
            suraId: currentSura?.quran_order,
            pageNumber: currentPage.pageNumber,
            limitOfPage: 1,
          }),
        );
      }
    }, [currentPage, currentSura?.quran_order, dispatch]);

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
