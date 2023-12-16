import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './ReadingArabic.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getReadingArabicData,
  getReadingArabicError,
  getReadingArabicIsLoading,
} from '../../model/selectors/readingArabic';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { readingArabicReducer } from '../../model/slice/readingArabicSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import ReadingQuranErrorDialog from '@/shared/ui/ErrorDialog/ErrorDialog';
import { fetchReadingArabic } from '../../model/services/fetchReadingArabic';
import QuranPages from '../QuranPages/QuranPages';
import {
  getSelectedPageRead,
  useSelectedPageReadActions,
} from '@/entities/PageRead';
import { getSelectedSuraRead } from '@/entities/SurahRead';
import SuraNameContainer, {
  SuraNameSize,
} from '@/shared/ui/SuraName/SuraNameContainer';
import Bismillah from '@/shared/ui/Bismillah/Bismillah';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
// import { useInfiniteScrollForRead } from '@/shared/lib/hooks/useInfiniteScrollForRead/useInfiniteScrollForRead';
import { useSelectedPageReadSelectActions } from '@/entities/PageReadSelect';
import { getSelectedSura } from '@/entities/Surah';
import { WordDetect } from '@/features/WordDetect';
import { Surah } from '../../model/types/readingSura';
import ReadTextSkeleton from '@/shared/ui/ReadTextSkeleton/ReadTextSkeleton';
import { Page } from '@/widgets/Page';

const CHAPTERS_WITHOUT_BISMILLAH = ['1', '9'];
interface ReadingArabicProps {
  className?: string;
}

const reducers: ReducersList = {
  readingArabic: readingArabicReducer,
};

export const ReadingArabic = memo(({ className }: ReadingArabicProps) => {
  const dispatch = useAppDispatch();
  const currentSuraRead = useSelector(getSelectedSuraRead);
  const currentPageRead = useSelector(getSelectedPageRead);
  const { setFetchIsLoading } = useContext(ButtonsContext);
  const { setSelectedPageReadSelect } = useSelectedPageReadSelectActions();
  const surahId = useSelector(getSelectedSura);
  const [surahPages, setSurahPages] = useState<Surah[]>();
  const data = useSelector(getReadingArabicData);
  const isLoading = useSelector(getReadingArabicIsLoading);
  const isError = useSelector(getReadingArabicError);
  const { incrementCurrentPageRead } = useSelectedPageReadActions();

  useEffect(() => {
    if (data) {
      const pageList = Object.values(data).map(
        (page) => page[currentSuraRead.quran_order],
      );
      // @ts-ignore
      setSurahPages(pageList);
    }
  }, [currentSuraRead.quran_order, data]);

  // this useEffec to request get data which has suraId and pageNumber between  suraId.pages[0,1]
  useEffect(() => {
    if (
      !(
        data &&
        data[currentPageRead?.pageNumber] &&
        data[currentPageRead?.pageNumber][currentSuraRead?.quran_order]
      )
    ) {
      if (
        currentSuraRead?.pages[0] <= currentPageRead.pageNumber &&
        currentSuraRead?.pages[1] >= currentPageRead.pageNumber
      ) {
        dispatch(
          fetchReadingArabic({
            suraId: currentSuraRead?.quran_order,
            pageNumber: currentPageRead.pageNumber,
          }),
        );
      }
    }

    setSelectedPageReadSelect(currentPageRead.pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageRead.pageNumber, surahId?.quran_order, dispatch]);

  // eslint-disable-next-line consistent-return
  const renderContent = useMemo(() => {
    if (isLoading) {
      setFetchIsLoading(isLoading);
      return <ReadTextSkeleton />;
    }
    if (data) {
      // @ts-ignore
      setFetchIsLoading(isLoading);
      const currentPage = currentPageRead?.pageNumber;
      const currentSura = currentSuraRead?.quran_order;
      const dataOfCurrentPage = data?.[currentPage]?.[currentSura];
      if (dataOfCurrentPage) {
        return (
          <Page onScrollEnd={() => incrementCurrentPageRead()}>
            <WordDetect />
            <QuranPages />;
          </Page>
        );
      }
    } else if (isError) {
      return (
        <ReadingQuranErrorDialog isErrorProps={!false} errorProps={isError} />
      );
    } else {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError, currentPageRead.pageNumber, currentSuraRead?.quran_order]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div
        data-testid="reading-arabic"
        className={classNames(cls.ReadingArabic, {}, [className])}
      >
        <div
          className={classNames(cls.ReadingArabic__readBox, {}, [className])}
        >
          {data && (
            <SuraNameContainer
              suraId={`00${currentSuraRead.quran_order}`}
              hasSurahPrefix
              size={SuraNameSize.Large}
            />
          )}
          {!CHAPTERS_WITHOUT_BISMILLAH.includes(
            String(currentSuraRead.quran_order),
          ) && <Bismillah />}
          {renderContent}
          <div className={cls.trigger} id="bootomOfPage" />
        </div>
      </div>
    </DynamicModuleLoader>
  );
});
