/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/button-has-type */
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './Tafsir.module.scss';

import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchTafsirList } from '../model/service/fetchTafsir/fetchTafsirList';
import { ListOfTafsir } from '@/entities/Tafsir';

import { getDataTafsir } from '../model/selector/selectorTafsir';

import { Sidebar } from '@/widgets/Sidebar';
import { ReadingSidebar } from '@/widgets/ReadingSidebar';
import { ReadingNavbar } from '@/widgets/ReadingNavbar';
import { getSelectedSura } from '@/entities/Surah';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import { dataFotiha } from '@/entities/Tafsir';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { fetchAudioSegments } from '../model/service/fetchAudioSegments/fetchAudioSegments';
import { sliceTafsirReducer } from '../model/slice/sliceTafsir';
import { sliceSegmentReduce } from '../model/slice/sliceSegment';
import { getDataSegment } from '../model/selector/selectorSegment';

interface TafsirProp {
  className?: string;
}

const reducer: ReducersList = {
  tafsirPage: sliceTafsirReducer,
  segment: sliceSegmentReduce,
};

const Tafsir = (prop: TafsirProp) => {
  const { setIsPlay, setAudioTime, audioTime } = useContext(ButtonsContext);

  const dataOfTafsir = useSelector(getDataTafsir);
  const getSegmentData = useSelector(getDataSegment);
  const surahId = useSelector(getSelectedSura);

  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  const [word, setWord] = useState(0);
  const [ayah, setAyah] = useState(0);

  const [segmentsData, setSegmentsData] = useState(
    getSegmentData
      ? getSegmentData[surahId.quran_order]?.data?.verse_timings
      : dataFotiha,
  );

  useEffect(() => {
    dispatch(fetchAudioSegments({ chapterId: surahId.quran_order }));

    if (getSegmentData) {
      setSegmentsData(getSegmentData[surahId.quran_order]?.data.verse_timings);
      setIsPlay(false);
      // setWord(0);
      setAyah(0);
    }
  }, [surahId.quran_order]);

  useEffect(() => {
    if (segmentsData?.length > ayah) {
      // console.log(segmentsData?.length);

      if (
        segmentsData[ayah]?.timestamp_from <= audioTime * 1000 &&
        segmentsData[ayah]?.timestamp_to > audioTime * 1000
      ) {
        if (
          segmentsData[ayah]?.segments[word]?.[1] <= audioTime * 1000 &&
          segmentsData[ayah]?.segments[word]?.[2] > audioTime * 1000
        ) {
          const element = document.getElementById(
            `${surahId.quran_order}:${ayah + 1}:${word + 1}`,
          );
          // console.log(element, audioTime, 'element');

          element?.classList.add('activeWord');
        } else {
          const lastElement = document.getElementById(
            `${surahId.quran_order}:${ayah + 1}:${word + 1}`,
          );
          lastElement?.classList.remove('activeWord');
          setWord((pre) => pre + 1);
        }
      } else {
        const lastAyahElement = document.getElementById(
          `${surahId.quran_order}:${ayah + 1}:${word + 1}`,
        );
        lastAyahElement?.classList.remove('activeWord');
        setAyah((pre) => pre + 1);
        setWord(0);
      }
    }
  }, [audioTime, surahId.quran_order]);

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
