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
  const { setIsPlay, setAudioTime, audioTime } = useContext(ButtonsContext);

  const dataOfTafsir = useSelector(getDataTafsir);
  const getSegmentData = useSelector(getDataSegment);
  const surahId = useSelector(getSelectedSura);

  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  const [word, setWord] = useState(0);
  const [ayah, setAyah] = useState(0);
  const [wordNew, setWordNew] = useState<string>('1');
  const [ayahNew, setAyahNew] = useState<string>('1');
  const [segmentsVerse, setSegmentsVerse] = useState<VerseTime>();
  const [lastPosition, setLastPosition] = useState('1:1:1');

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
      setAyah(0);
      setWordNew('1');
      setAyahNew('1');
    }
  }, [surahId.quran_order]);

  const detectWord = (timeAudio: number) => {
    const word = segmentsVerse?.segments?.find(
      (segment: number[]) =>
        segment[1] <= timeAudio * 1000 && segment[2] > timeAudio * 1000,
    );
    setLastPosition(`${ayahNew}:${wordNew}`);
    setWordNew(word?.[0]);
    console.log(`${ayahNew}:${wordNew}`);
  };

  const detectVerse = (timeOfAudio: number) => {
    const verse = segmentsData?.find(
      (segment) =>
        segment.timestamp_from <= timeOfAudio * 1000 &&
        segment.timestamp_to > timeOfAudio * 1000,
    );
    if (verse) {
      setWordNew('1');
      setAyahNew(verse?.verse_key);
      setSegmentsVerse(verse);
    }

    detectWord(timeOfAudio);
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
  useEffect(() => {
    scrollToDiv();
  }, [segmentsVerse?.verse_key]);

  useEffect(() => {
    detectVerse(audioTime);
  }, [audioTime, surahId.quran_order]);

  useEffect(() => {
    detectWord(audioTime);
  }, [segmentsVerse?.segments]);

  useEffect(() => {
    if (segmentsData?.length > ayah) {
      if (
        segmentsData[ayah]?.timestamp_from <= audioTime * 1000 &&
        segmentsData[ayah]?.timestamp_to > audioTime * 1000
      ) {
        if (
          segmentsData[ayah]?.segments[word]?.[1] <= audioTime * 1000 &&
          segmentsData[ayah]?.segments[word]?.[2] > audioTime * 1000
        ) {
          const element = document.getElementById(`${ayahNew}:${wordNew}`);

          element?.classList.add('activeWord');
        } else {
          const lastElement = document.getElementById(`${lastPosition}`);
          lastElement?.classList.remove('activeWord');
          setWord((pre) => pre + 1);
        }
      } else {
        const lastAyahElement = document.getElementById(`${lastPosition}`);
        lastAyahElement?.classList.remove('activeWord');
        setAyah((pre) => pre + 1);
        // setWord(0);
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
