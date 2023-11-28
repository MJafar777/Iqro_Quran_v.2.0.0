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
import { getDataTafsir } from '../model/selector/selectorTafsir';
import { Sidebar } from '@/widgets/Sidebar';
import { ReadingSidebar } from '@/widgets/ReadingSidebar';
import { ReadingNavbar } from '@/widgets/ReadingNavbar';
import { getSelectedSura } from '@/entities/Surah';

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

  const handleScroll = () => {
    console.log(
      window.innerHeight,
      document.documentElement.scrollTop,
      document.documentElement.offsetHeight,
    );

    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      setPage((pro) => pro + 1);
      dispatch(
        fetchTafsirList({
          chapterId: surahId.quran_order,
          page_number: page + 1,
        }),
      ); // Assuming 10 items per page
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (dataOfTafsir && !dataOfTafsir[surahId.quran_order])
      dispatch(
        fetchTafsirList({ chapterId: surahId.quran_order, page_number: 1 }),
      );
  }, [dataOfTafsir, dispatch, surahId]);

  const content = useMemo(
    () => (
      <div className={cls.tafsir}>
        <ReadingNavbar />
        <Sidebar>
          <ReadingSidebar />
        </Sidebar>
        <ListOfTafsir
          // @ts-ignore
          listOfTafsir={dataOfTafsir?.[surahId?.quran_order]}
          quran_order={surahId.quran_order}
        />
      </div>
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
