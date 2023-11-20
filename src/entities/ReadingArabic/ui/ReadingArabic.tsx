import { memo } from 'react';
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

interface ReadingArabicProps {
  className?: string;
  disabled?: boolean;
}

const reducers: ReducersList = {
  readingArabic: readingArabicReducer,
};

export const ReadingArabic = memo(
  ({ className, disabled }: ReadingArabicProps) => {
    const data = useSelector(getReadingArabicData);
    const isLoading = useSelector(getReadingArabicIsLoading);
    const isError = useSelector(getReadingArabicError);

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
        <div
          data-testid="reading-arabic"
          className={classNames(cls.ReadingArabic, {}, [className])}
        >
          <div
            className={classNames(cls.ReadingArabic__readBox, {}, [className])}
          >
            {/* {isLoading ? (
              <BookBoxSkeleton />
            ) : data && data[currentSura.suraId]?.data.resourse ? (
              <BookBox
                imgUrl={`${
                  data[currentSura.suraId]?.data.resourse[
                    Number(data[currentSura.suraId]?.data?.data[0]?.pages[0]) -
                      currentPage.pageNumber -
                      1
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
            )} */}
          </div>
        </div>
      </DynamicModuleLoader>
    );
  },
);
