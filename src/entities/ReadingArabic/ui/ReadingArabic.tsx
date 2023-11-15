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
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';

// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { useSelectedSuraValue } from '@/entities/Surah/model/selectors/getSelectedSuraValue/getSelectedSuraValue';

import ArrowBottom from '@/shared/assets/icons/arrow-bottom.svg';

interface ReadingArabicProps {
  className?: string;
  disabled?: boolean;
}

const reducers: ReducersList = {
  readingArabic: readingArabicReducer,
};

export const ReadingArabic = memo(
  ({ className, disabled }: ReadingArabicProps) => {
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
            <div
              className={classNames(cls.ReadingArabic__prevBtn, {}, [
                className,
              ])}
            >
              <ArrowBottom
                className={classNames(cls.ReadingArabic__prevBtnIcon, {}, [])}
              />
            </div>

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

            <div
              className={classNames(
                cls.ReadingArabic__nextBtn,
                { [cls.disabled]: false },
                [className],
              )}
            >
              <ArrowBottom
                className={classNames(cls.ReadingArabic__nextBtnIcon, {}, [])}
              />
            </div>
          </div>
        </div>
      </DynamicModuleLoader>
    );
  },
);
