import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
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
import { getUIScrollByPath } from '@/features/UI';
import { StateSchema } from '@/app/providers/StoreProvider';

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
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getUIScrollByPath(state, pathname),
  );

  useEffect(() => {
    if (
      surahId?.quran_order &&
      dataOfTafsir &&
      !dataOfTafsir[surahId?.quran_order]
    ) {
      dispatch(
        fetchTafsirList({
          // @ts-ignore
          chapterId: surahId?.quran_order,
          page_number: surahId.pages[0],
        }),
      );
    } else if (surahId.quran_order && !dataOfTafsir) {
      dispatch(
        // @ts-ignore
        fetchTafsirList({ chapterId: surahId?.quran_order, page_number: page }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  useEffect(() => {
    setPage(surahId?.pages[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surahId.quran_order]);

  const onLoadNextPart = () => {
    setPage((pre) => pre + 1);
  };

  // eslint-disable-next-line consistent-return
  const content = useMemo(() => {
    return (
      <Page
        onScrollEnd={onLoadNextPart}
        data-testid="ArticlesPage"
        className={classNames(cls.tafsir, {}, [])}
      >
        <ReadingNavbar />
        <Sidebar>
          <ReadingSidebar />
        </Sidebar>
        {dataOfTafsir ? (
          <ListOfTafsir
            listOfTafsir={dataOfTafsir[surahId?.quran_order]?.data?.data}
            quran_order={surahId.quran_order}
          />
        ) : (
          ''
        )}
      </Page>
    );
  }, [dataOfTafsir, surahId?.quran_order]);

  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default Tafsir;
