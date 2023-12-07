/* eslint-disable camelcase */
import React, { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import cls from './ListOfTafsir.module.scss';
import { OneTafsirCard } from '../OneTafsirCard/OneTafsirCard';
import { isLoading } from '@/pages/Tafsir';
import SurahInfoAndAudioForTafsir from '@/shared/ui/SurahInfoAndAudioForTafsir/SurahInfoAndAudioForTafsir';
import useQcfFont from '@/shared/lib/hooks/useQcfFont/useQcfFont';
import { Verse } from '@/entities/ReadingArabic';
import { OneTafsirCardSkleton } from '../OneTafsirCard/OneTafsirCardSkleton';
import { AudioPlayer } from '@/shared/ui/AudioPlayer/AudioPlayer';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

interface ListOfTafsirProp {
  className?: string;
  listOfTafsir?: Verse[];
  quran_order?: number;
}

export const ListOfTafsir = memo((prop: ListOfTafsirProp) => {
  const { listOfTafsir } = prop;
  const isLoadingOfTafsir = useSelector(isLoading);
  const { audioUrl } = useContext(ButtonsContext);

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

      <AudioPlayer src={audioUrl} />
    </div>
  );

  return content;
});
