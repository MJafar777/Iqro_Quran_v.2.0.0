/* eslint-disable camelcase */
import React, { memo, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { dataFotiha } from '../../model/const/fotihaSegment';
import cls from './ListOfTafsir.module.scss';
import { OneTafsirCard } from '../OneTafsirCard/OneTafsirCard';
import { isLoading } from '@/pages/Tafsir';
import SurahInfoAndAudioForTafsir from '@/shared/ui/SurahInfoAndAudioForTafsir/SurahInfoAndAudioForTafsir';
import { AudioPlayerComp } from '@/shared/ui/AudioPlayerComp';
import useQcfFont from '@/shared/lib/hooks/useQcfFont/useQcfFont';
import { Verse } from '@/entities/ReadingArabic';
import { OneTafsirCardSkleton } from '../OneTafsirCard/OneTafsirCardSkleton';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import AudioPlayer from '@/shared/ui/AudioPlayer/AudioPlayer';

interface ListOfTafsirProp {
  className?: string;
  listOfTafsir?: Verse[];
  quran_order: number;
}

export const ListOfTafsir = memo((prop: ListOfTafsirProp) => {
  const { listOfTafsir, quran_order } = prop;
  const isLoadingOfTafsir = useSelector(isLoading);
  const { isPlay, setIsPlay } = useContext(ButtonsContext);

  const [audio, setAudio] = useState(
    'http://iqro-quran.uz/developmentBackend/suras/1.mp3',
  );

  useEffect(() => {
    setAudio(
      `http://iqro-quran.uz/developmentBackend/suras/${quran_order}.mp3`,
    );
  }, [quran_order]);

  // @ts-ignore
  useQcfFont(listOfTafsir);

  const content = (
    <div className={cls.listOfTafsir}>
      <SurahInfoAndAudioForTafsir />
      {listOfTafsir?.map((oneVerse) => {
        // @ts-ignore
        return <OneTafsirCard data={oneVerse} />;
      })}

      {isLoadingOfTafsir ? <OneTafsirCardSkleton /> : ''}
    
      <AudioPlayer />

      <AudioPlayerComp src={audio} />
    </div>
  );

  return content;
});
