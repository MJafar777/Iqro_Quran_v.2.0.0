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

interface TafsirProp {
  className?: string;
}

const reducer: ReducersList = {
  tafsirPage: sliceTafsirReduce,
};

const Tafsir = (prop: TafsirProp) => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchTafsirList({ chapterId: 1 }));
  //   console.log('jdjjdjnwedfnweofwefweufo');
  // }, [dispatch]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchTafsirList({ chapterId: 1 }));
        console.log('Request successful');
      } catch (error) {
        console.error('Error in API request:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const dataOfTafsir = useSelector(getDataTafsir);

  console.log(dataOfTafsir, 'jdjdjdjdjjdj');

  const content = useMemo(
    () => (
      <div className={cls.tafsir}>
        <ListOfTafsir />
      </div>
    ),
    [],
  );

  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default Tafsir;
