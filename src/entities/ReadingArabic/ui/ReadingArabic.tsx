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
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { readingArabicReducer } from '../model/slice/readingArabicSlice';

interface ReadingArabicProps {
  className?: string;
}

const reducers: ReducersList = {
  readingArabic: readingArabicReducer,
};

export const ReadingArabic = memo(({ className }: ReadingArabicProps) => {
  const data = useSelector(getReadingArabicData);
  const isLoading = useSelector(getReadingArabicIsLoading);
  const isError = useSelector(getReadingArabicError);

  // if (data) {
  //   console.log(data);
  // }

  // if (isLoading) {
  //   console.log(isLoading);
  // }

  // if (isError) {
  //   console.log(isError);
  // }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        data-testid="reading-arabic"
        className={classNames(cls.ReadingArabic, {}, [className])}
      >
        {}
      </div>
    </DynamicModuleLoader>
  );
});
