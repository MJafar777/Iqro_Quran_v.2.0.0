import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingTranslateLotin.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getReadingTranslateLotinData,
  getReadingTranslateLotinError,
  getReadingTranslateLotinIsLoading,
} from '../model/selectors/readingTranslateLotin';
import { getSelectedPage } from '@/entities/Page';
import { getSelectedSura } from '@/entities/Surah';
import BookBox from '@/shared/ui/BookBox/BookBox';
import BookBoxSkeleton from '@/shared/ui/BookBoxSkeleton/BookBoxSkeleton';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { readingTranslateLotinReducer } from '../model/slice/readingTranslateLotin';
import { fetchReadingTranslateLotin } from '../model/services/fetchReadingTranslateLotin';

interface ReadingTranslateLotinProps {
  className?: string;
}

const reducers: ReducersList = {
  readingTranslateLotin: readingTranslateLotinReducer,
};

export const ReadingTranslateLotin = memo(
  ({ className }: ReadingTranslateLotinProps) => {
    const dispatch = useAppDispatch();
    const currentSura = useSelector(getSelectedSura);
    const currentPage = useSelector(getSelectedPage);

    const data = useSelector(getReadingTranslateLotinData);
    const isLoading = useSelector(getReadingTranslateLotinIsLoading);
    const isError = useSelector(getReadingTranslateLotinError);

    const [imageUrl, setImageUrl] = useState<string>();

    useEffect(() => {
      if (currentSura?.quran_order && data && !data[currentSura?.quran_order]) {
        dispatch(
          fetchReadingTranslateLotin({
            suraId: currentSura?.quran_order,
            pageNumber: currentPage.pageNumber,
            limitOfPage: 1,
          }),
        );
      } else if (currentSura?.quran_order && !data) {
        dispatch(
          fetchReadingTranslateLotin({
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
          fetchReadingTranslateLotin({
            suraId: currentSura?.quran_order,
            pageNumber: currentPage.pageNumber,
            limitOfPage: 1,
          }),
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, dispatch]);

    useEffect(() => {
      if (data && data[currentSura?.quran_order]?.data.resourse) {
        // eslint-disable-next-line no-restricted-syntax, no-unsafe-optional-chaining
        for (const obj of data[currentSura?.quran_order]?.data.resourse) {
          if (Object.keys(obj).includes(String(currentPage?.pageNumber))) {
            // console.log(obj[currentPage?.pageNumber]);

            if (obj[currentPage?.pageNumber]) {
              setImageUrl(obj[currentPage?.pageNumber]);
            }
            break;
          }
        }
      }
    }, [data, currentPage.pageNumber, currentSura?.quran_order]);

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
        <div
          data-testid="reading-arabic"
          className={classNames(cls.ReadingTranslateLotin, {}, [className])}
        >
          <div
            className={classNames(cls.ReadingTranslateLotin__readBox, {}, [
              className,
            ])}
          >
            {isLoading ? (
              <BookBoxSkeleton />
            ) : data && data[currentSura?.quran_order]?.data.resourse ? (
              <BookBox imgUrl={`${imageUrl}`} />
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