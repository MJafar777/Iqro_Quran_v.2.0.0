/* eslint-disable no-unneeded-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useMemo, useState } from 'react';
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
import { ListOfTafsir, dataFotiha } from '@/entities/Tafsir';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { fetchAudioSegments } from '../model/service/fetchAudioSegments/fetchAudioSegments';
import { sliceTafsirReducer } from '../model/slice/sliceTafsir';
import { sliceSegmentReduce } from '../model/slice/sliceSegment';
import { getDataSegment } from '../model/selector/selectorSegment';
import { VerseTime } from '../model/types/typeSegments';

interface TafsirProp {
  className?: string;
}

const reducer: ReducersList = {
  tafsirPage: sliceTafsirReducer,
  segment: sliceSegmentReduce,
};

const Tafsir = (prop: TafsirProp) => {
  const { setIsPlay, isPlay, setAudioTime, audioTime } =
    useContext(ButtonsContext);

  const dataOfTafsir = useSelector(getDataTafsir);
  const getSegmentData = useSelector(getDataSegment);
  const surahId = useSelector(getSelectedSura);

  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  const [wordNew, setWordNew] = useState<number>(1);
  const [ayahNew, setAyahNew] = useState<number>(1);
  const [segmentsVerse, setSegmentsVerse] = useState<VerseTime>();

  const [lastPosition, setLastPosition] = useState(
    `${surahId.quran_order}:${wordNew}:${ayahNew}`,
  );

  const [segmentsData, setSegmentsData] = useState(
    getSegmentData
      ? getSegmentData[surahId.quran_order]?.data?.verse_timings
      : dataFotiha,
  );

  const detectWord = (timeAudio: number) => {
    const word = segmentsVerse?.segments?.find(
      (segment: number[]) =>
        segment[1] <= timeAudio * 1000 && segment[2] > timeAudio * 1000,
    );
    setLastPosition(`${surahId.quran_order}:${ayahNew}:${wordNew}`);
    setWordNew(word?.[0]);
  };

  const detectVerse = (timeOfAudio: number) => {
    const verse = segmentsData?.find(
      (segment) =>
        segment.timestamp_from <= timeOfAudio * 1000 &&
        segment.timestamp_to > timeOfAudio * 1000,
    );
    if (verse) {
      setWordNew(0);
      const ayah = parseInt(verse.verse_key.split(':')[1], 10);
      setAyahNew(ayah);
      setSegmentsVerse(verse);
    }
  };

  const scrollToDiv = () => {
    const targetDiv = document.getElementById(`${segmentsVerse?.verse_key}`);

    if (targetDiv) {
      targetDiv.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
        duration: 1000,
      } as any);
    }
  };

  // useEffect(() => {
  //   const element = document.getElementById(
  //     `${surahId.quran_order}:${ayahNew ? ayahNew : 1}:${
  //       wordNew ? wordNew : 1
  //     }`,
  //   );
  //   if (isPlay) {
  //     element?.classList.add('activeWord');
  //   }
  // }, [isPlay]);

  useEffect(() => {
    scrollToDiv();
  }, [segmentsVerse?.verse_key]);

  useEffect(() => {
    if (getSegmentData) {
      setSegmentsData(getSegmentData[surahId.quran_order]?.data.verse_timings);
      detectVerse(audioTime);
      detectWord(audioTime);
    }
  }, [audioTime, surahId.quran_order]);

  useEffect(() => {
    const element = document.getElementById(
      `${surahId.quran_order}:${ayahNew}:${wordNew}`,
    );
    element?.classList.add('activeWord');
    const lastElement = document.getElementById(`${lastPosition}`);
    lastElement?.classList.remove('activeWord');
  }, [wordNew, segmentsVerse]);

  // fetch data save data in redux
  useEffect(() => {
    dispatch(fetchAudioSegments({ chapterId: surahId.quran_order }));
    setIsPlay(false);
    setAyahNew(1);
    setWordNew(1);
  }, [surahId.quran_order]);

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

  // fetch data save data in redux

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
