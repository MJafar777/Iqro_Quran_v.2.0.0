/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './Tafsir.module.scss';

import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchTafsirList } from '../model/service/fetchTafsir/fetchTafsirList';
import { getDataTafsir } from '../model/selector/selectorTafsir';
import { Sidebar } from '@/widgets/Sidebar';
import { ReadingSidebar } from '@/widgets/ReadingSidebar';
import { ReadingNavbar } from '@/widgets/ReadingNavbar';
import { getSelectedSura } from '@/entities/Surah';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListOfTafsir } from '@/entities/Tafsir';
import { sliceTafsirReducer } from '../model/slice/sliceTafsir';
import { WordDetect } from '@/features/WordDetect';

interface TafsirProp {
  className?: string;
}

const reducer: ReducersList = {
  tafsirPage: sliceTafsirReducer,
};

const Tafsir = (prop: TafsirProp) => {
  const dataOfTafsir = useSelector(getDataTafsir);
  const surahId = useSelector(getSelectedSura);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(
      fetchTafsirList({
        chapterId: 1,
        page_number: 1,
      }),
    );
  }, []);

  useEffect(() => {
    if (
      surahId?.quran_order &&
      dataOfTafsir &&
      !dataOfTafsir[surahId?.quran_order]
    ) {
      dispatch(
        fetchTafsirList({
          chapterId: surahId?.quran_order,
          page_number: surahId.pages[0],
        }),
      );
    } else if (surahId.quran_order && !dataOfTafsir) {
      dispatch(
        fetchTafsirList({ chapterId: surahId?.quran_order, page_number: page }),
      );
    }
  }, [surahId?.quran_order, dispatch]);

  useEffect(() => {
    if (
      dataOfTafsir &&
      !dataOfTafsir[surahId?.quran_order]?.data?.data?.some(
        (verse) => verse.page_number === page,
      ) &&
      // @ts-ignore
      dataOfTafsir[surahId?.quran_order]?.data?.pagination?.nextpage
    ) {
      dispatch(
        // @ts-ignore
        fetchTafsirList({ chapterId: surahId?.quran_order, page_number: page }),
      );
    }
  }, [dispatch, page]);

  useEffect(() => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    setPage(surahId?.pages[0] - 1);
  }, [surahId.quran_order]);

  const onLoadNextPart = () => {
    setPage((pre) => pre + 1);
  };

  // eslint-disable-next-line consistent-return
  const content = useMemo(() => {
    if (dataOfTafsir)
      return (
        <Page
          onScrollEnd={onLoadNextPart}
          data-testid="TafsirPage"
          className={classNames(cls.tafsir, {}, [])}
        >
          <ReadingNavbar />
          <Sidebar>
            <ReadingSidebar />
          </Sidebar>
          <ListOfTafsir
            listOfTafsir={dataOfTafsir[surahId?.quran_order]?.data?.data}
            quran_order={surahId.quran_order}
          />
          <WordDetect />
        </Page>
      );
  }, [dataOfTafsir, surahId.quran_order]);

  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default Tafsir;
