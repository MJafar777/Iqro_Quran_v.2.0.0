import { memo, useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingTranslateKril.module.scss';
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
import { classNames } from '@/shared/lib/classNames/classNames';
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

    const [imageUrl, setImageUrl] = useState<string>();

    useEffect(() => {
      if (currentSura?.quran_order) {
        const suraData = data?.[currentSura.quran_order]?.data?.resourse;

        if (!suraData) {
          dispatch(
            fetchReadingTranslateKril({
              suraId: currentSura.quran_order,
              pageNumber: currentPage.pageNumber,
              limitOfPage: 1,
            }),
          );
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSura?.quran_order, dispatch]);

    useEffect(() => {
      if (currentSura?.quran_order && data) {
        const suraData = data[currentSura.quran_order]?.data?.resourse;

        if (
          suraData &&
          !suraData.some(
            (item) =>
              Object.keys(item)[0] === currentPage.pageNumber.toString(),
          )
        ) {
          dispatch(
            fetchReadingTranslateKril({
              suraId: currentSura.quran_order,
              pageNumber: currentPage.pageNumber,
              limitOfPage: 1,
            }),
          );
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, dispatch]);

    useEffect(() => {
      if (data && data[currentSura?.quran_order]?.data.resourse) {
        const suraData = data[currentSura?.quran_order]?.data.resourse;

        // eslint-disable-next-line no-restricted-syntax
        for (const obj of suraData) {
          if (Object.keys(obj).includes(String(currentPage.pageNumber))) {
            setImageUrl(obj[currentPage.pageNumber]);
            break;
          }
        }
      }
    }, [data, currentPage.pageNumber, currentSura?.quran_order]);

    const renderContent = useMemo(() => {
      if (isLoading) {
        return <BookBoxSkeleton />;
      }
      if (data && data[currentSura?.quran_order]?.data.resourse) {
        return <BookBox imgUrl={imageUrl || ''} />;
        // eslint-disable-next-line no-else-return
      } else if (isError) {
        return (
          <ReadingQuranErrorDialog isErrorProps={!false} errorProps={isError} />
        );
      } else {
        return null;
      }
    }, [isLoading, data, currentSura?.quran_order, imageUrl, isError]);

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
            {renderContent}
          </div>
        </div>
      </DynamicModuleLoader>
    );
  },
);
