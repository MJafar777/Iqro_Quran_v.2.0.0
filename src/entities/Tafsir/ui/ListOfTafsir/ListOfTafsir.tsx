/* eslint-disable camelcase */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { memo } from 'react';
import cls from './ListOfTafsir.module.scss';
import { OneTafsirCard } from '../OneTafsirCard/OneTafsirCard';
import { TafsirChapterData } from '@/pages/Tafsir';
import SurahInfoAndAudioForTafsir from '@/shared/ui/SurahInfoAndAudioForTafsir/SurahInfoAndAudioForTafsir';
import { AudioPlayerComp } from '@/shared/ui/AudioPlayerComp';

interface ListOfTafsirProp {
  className?: string;
  listOfTafsir?: TafsirChapterData[];
  quran_order: number;
}

export const ListOfTafsir = memo((prop: ListOfTafsirProp) => {
  const { listOfTafsir, quran_order } = prop;
  console.log(listOfTafsir, 'listOfTafsir');

  return (
    <div className={cls.listOfTafsir}>
      <SurahInfoAndAudioForTafsir />
      {listOfTafsir?.map((oneVerse) => {
        // @ts-ignore
        return <OneTafsirCard data={oneVerse} />;
      })}

      <AudioPlayerComp
        src={`https://server6.mp3quran.net/thubti/00${quran_order}.mp3`}
      />
    </div>
  );
});
