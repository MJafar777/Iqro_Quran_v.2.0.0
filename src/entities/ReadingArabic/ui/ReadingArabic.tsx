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

import BookBox from '@/shared/ui/BookBox/BookBox';
import BookBoxSkeleton from '@/shared/ui/BookBoxSkeleton/BookBoxSkeleton';

// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { useSelectedSuraValue } from '@/entities/Surah/model/selectors/getSelectedSuraValue/getSelectedSuraValue';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';

interface ReadingArabicProps {
  className?: string;
}

const reducers: ReducersList = {
  readingArabic: readingArabicReducer,
};

export const ReadingArabic = memo(({ className }: ReadingArabicProps) => {
  const currentSura = useSelectedSuraValue();
  const data = useSelector(getReadingArabicData);
  const isLoading = useSelector(getReadingArabicIsLoading);
  const isError = useSelector(getReadingArabicError);

  if (isError) {
    console.log(isError);
  }

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
          ) : data && data[currentSura.suraId]?.data.resourse ? (
            <BookBox imgUrl={`${data[currentSura.suraId]?.data.resourse}`} />
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
