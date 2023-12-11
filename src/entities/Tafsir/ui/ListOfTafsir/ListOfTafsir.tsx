/* eslint-disable camelcase */
import React, { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import cls from './ListOfTafsir.module.scss';
import { OneTafsirCard } from '../OneTafsirCard/OneTafsirCard';
import SurahInfoAndAudioForTafsir from '@/shared/ui/SurahInfoAndAudioForTafsir/SurahInfoAndAudioForTafsir';
import useQcfFont from '@/shared/lib/hooks/useQcfFont/useQcfFont';
// import { Verse } from '@/entities/ReadingArabic';
import { OneTafsirCardSkleton } from '../OneTafsirCard/OneTafsirCardSkleton';
import { AudioPlayer } from '@/shared/ui/AudioPlayer/AudioPlayer';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { getDataTafsir, isLoading } from '@/pages/Tafsir';
import { getSelectedSura } from '@/entities/Surah';

interface ListOfTafsirProp {
  className?: string;
}

export const ListOfTafsir = memo((prop: ListOfTafsirProp) => {
  const { audioUrl } = useContext(ButtonsContext);
  const getIsLoading = useSelector(isLoading);
  const dataOfTafsir = useSelector(getDataTafsir);
  const surahId = useSelector(getSelectedSura);

  // @ts-ignore
  useQcfFont(dataOfTafsir![surahId?.quran_order]?.data?.data);

  const content = (
    <div className={cls.listOfTafsir}>
      <SurahInfoAndAudioForTafsir />

      {dataOfTafsir![surahId?.quran_order]?.data?.data?.map((oneVerse) => {
        return <OneTafsirCard data={oneVerse} />;
      })}

      {getIsLoading ? <OneTafsirCardSkleton /> : ''}

      <AudioPlayer src={audioUrl} />
    </div>
  );

  return content;
});
