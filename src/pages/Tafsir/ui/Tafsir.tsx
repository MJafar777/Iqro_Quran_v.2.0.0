/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/button-has-type */
import React, { useContext, useEffect, useMemo, useState } from 'react';
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
import { dataFotiha } from '@/entities/Tafsir';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

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
  const [page, setPage] = useState(0);
  const windowHeight = useSelector(getWindowHieght);
  const { pathname } = useLocation();

  const [word, setWord] = useState(0);
  const [ayah, setAyah] = useState(0);
  const [sumAudio, setSumAudio] = useState(0);

  const { audioTime, setAudioTime } = useContext(ButtonsContext);

  useEffect(() => {
    console.log(
      audioTime * 1000,
      'summa',
      dataFotiha[ayah]?.segments[dataFotiha[ayah].segments.length - 1][3] +
        sumAudio,
      'chegara',
    );
    if (
      audioTime * 1000 <
      sumAudio +
        dataFotiha[ayah]?.segments[dataFotiha[ayah].segments.length - 1][3]
    ) {
      console.log(word, ayah, 'tashqi');
      console.log(
        audioTime * 1000,
        'ichkitime',
        dataFotiha[ayah]?.segments[word]?.[2] + sumAudio,
        'ichki summa',
        dataFotiha[ayah]?.segments[word]?.[3] + sumAudio,
        'ichki summa 3',
      );

      if (
        audioTime * 1000 > dataFotiha[ayah]?.segments[word]?.[2] + sumAudio &&
        audioTime * 1000 < dataFotiha[ayah]?.segments[word]?.[3] + sumAudio
      ) {
        console.log(word, ayah, 'ichki');
        const element = document.getElementById(
          `${surahId.quran_order}:${ayah + 1}:${word + 1}`,
        );
        element ? element.classList.add('activeWord') : '';
        console.log(element);
      } else {
        setWord((pre) => pre + 1);
      }
    } else {
      setAyah((pre) => pre + 1);

      setWord(0);
      setSumAudio(
        (pre) =>
          pre +
          dataFotiha[ayah].segments[dataFotiha[ayah].segments.length - 1][3],
      );
    }
  }, [audioTime]);

  useEffect(() => {
    dispatch(
      fetchTafsirList({
        // @ts-ignore
        chapterId: 1,
        page_number: 1,
      }),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(page, 'page');

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
  }, [surahId.quran_order, surahId?.pages]);

  const onLoadNextPart = () => {
    console.log(surahId?.pages[0], page);

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
        </Page>
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataOfTafsir, surahId.quran_order]);

  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default Tafsir;
