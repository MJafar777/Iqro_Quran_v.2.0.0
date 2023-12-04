/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './Tafsir.module.scss';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { sliceTafsirReduce } from '../model/slice/sliceTafsir';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchTafsirList } from '../model/service/fetchTafsir/fetchTafsirList';
import { ListOfTafsir } from '@/entities/Tafsir';
import {
  getDataTafsir,
  getWindowHieght,
} from '../model/selector/selectorTafsir';
import { Sidebar } from '@/widgets/Sidebar';
import { ReadingSidebar } from '@/widgets/ReadingSidebar';
import { ReadingNavbar } from '@/widgets/ReadingNavbar';
import { getSelectedSura } from '@/entities/Surah';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';

interface TafsirProp {
  className?: string;
}

const reducer: ReducersList = {
  tafsirPage: sliceTafsirReduce,
};

const Tafsir = (prop: TafsirProp) => {
  const dataOfTafsir = useSelector(getDataTafsir);
  const dispatch = useAppDispatch();
  const surahId = useSelector(getSelectedSura);
  const [page, setPage] = useState(1);
  const windowHeight = useSelector(getWindowHieght);
  console.log(surahId.quran_order, 'surah');

  useEffect(() => {
    dispatch(fetchTafsirList({ chapterId: 1, page_number: 1 }));
    console.log('dispatch');
  }, []);

  useEffect(() => {
    dispatch(
      fetchTafsirList({ chapterId: surahId.quran_order, page_number: page }),
    );
  }, [surahId.quran_order, page]);

  useEffect(() => {
    setPage(1);
  }, [surahId.quran_order]);

  const onLoadNextPart = () => {
    setPage((pre) => pre + 1);
  };

  const content = useMemo(
    () => (
      <Page
        data-testid="ArticlesPage"
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.tafsir, {}, [])}
      >
        <ReadingNavbar />
        <Sidebar>
          <ReadingSidebar />
        </Sidebar>
        <ListOfTafsir
          // @ts-ignore
          listOfTafsir={dataOfTafsir?.[surahId?.quran_order]?.data}
          quran_order={surahId.quran_order}
        />
      </Page>
    ),
    [dataOfTafsir, surahId?.quran_order],
  );

  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default Tafsir;
