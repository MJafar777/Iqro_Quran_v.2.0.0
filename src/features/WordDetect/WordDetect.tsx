/* eslint-disable import/no-duplicates */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedSura } from '@/entities/Surah';
import { dataFotiha } from '@/entities/Tafsir';
import {
  getDataSegment,
  fetchAudioSegments,
  VerseTime,
  sliceSegmentReduce,
} from '@/pages/Tafsir';

import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducer: ReducersList = {
  segment: sliceSegmentReduce,
};

export const WordDetect = memo(() => {
  const { setIsPlay, audioTime, verseKey, setVerseKey, setTimestampFrom } =
    useContext(ButtonsContext);

  const getSegmentData = useSelector(getDataSegment);
  const surahId = useSelector(getSelectedSura);

  const dispatch = useAppDispatch();

  const [wordNew, setWordNew] = useState<number>(0);
  const [ayahNew, setAyahNew] = useState<number>(0);
  const [segmentsVerse, setSegmentsVerse] = useState<VerseTime>();

  const [lastPosition, setLastPosition] = useState(
    `${surahId.quran_order}:${ayahNew}:${wordNew}`,
  );

  const [segmentsData, setSegmentsData] = useState(
    getSegmentData
      ? getSegmentData[surahId.quran_order]?.data?.verse_timings
      : dataFotiha,
  );

  const detectWord = (timeAudio: number) => {
    const word = segmentsVerse?.segments?.find(
      (segment: number[]) =>
        segment?.[1] <= timeAudio * 1000 && segment?.[2] > timeAudio * 1000,
    );
    setLastPosition(`${surahId.quran_order}:${ayahNew}:${wordNew}`);
    setWordNew(word?.[0]);
  };

  const detectVerse = (timeOfAudio: number) => {
    const verse = segmentsData?.find(
      (segment) =>
        segment?.timestamp_from <= timeOfAudio * 1000 &&
        segment?.timestamp_to > timeOfAudio * 1000,
    );
    if (verse) {
      setWordNew(0);
      // setVerseKey(verse.verse_key);
      const ayah = parseInt(verse.verse_key.split(':')?.[1], 10);
      setAyahNew(ayah);
      setSegmentsVerse(verse);
    }
  };

  const scrollToDiv = () => {
    const targetDiv = document.getElementById(`${segmentsVerse?.verse_key}`);

    if (targetDiv) {
      targetDiv.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
        duration: 1000,
      } as any);
    }
  };

  console.log(segmentsVerse?.verse_key, 'segmentsVerse?.verse_key');

  useEffect(() => {
    scrollToDiv();
  }, [segmentsVerse?.verse_key]);

  useEffect(() => {
    if (getSegmentData) {
      const verseTiming =
        getSegmentData?.[surahId.quran_order]?.data.verse_timings;
      setSegmentsData(verseTiming);
      setTimestampFrom(
        verseTiming?.[parseInt(verseKey.split(':')?.[1], 10) - 1]
          ?.timestamp_from,
      );
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
    setAyahNew(0);
    setWordNew(0);
    setVerseKey(`${surahId?.quran_order}:1`);
  }, [surahId.quran_order]);

  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
      {}
    </DynamicModuleLoader>
  );
});
