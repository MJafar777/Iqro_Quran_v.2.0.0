import React, { useEffect, useMemo } from 'react';
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

  useEffect(() => {
    if (dataOfTafsir && !dataOfTafsir[surahId.quran_order])
      dispatch(fetchTafsirList({ chapterId: surahId.quran_order }));
  }, [dataOfTafsir, dispatch, surahId]);

  console.log(dataOfTafsir?.[surahId.quran_order]);

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
