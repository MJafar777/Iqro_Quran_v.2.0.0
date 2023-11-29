/* eslint-disable camelcase */
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import cls from './ListOfTafsir.module.scss';
import { OneTafsirCard } from '../OneTafsirCard/OneTafsirCard';
import { Chapter , isLoading } from '@/pages/Tafsir';
import SurahInfoAndAudioForTafsir from '@/shared/ui/SurahInfoAndAudioForTafsir/SurahInfoAndAudioForTafsir';
// import { AudioPlayerComp } from '@/shared/ui/AudioPlayerComp';
import useQcfFont from '@/shared/lib/hooks/useQcfFont/useQcfFont';
import { OneTafsirCardSkleton } from '../OneTafsirCard/OneTafsirCardSkleton';
// import { AudioPlayerComp } from '@/shared/ui/AudioPlayerComp';

interface ListOfTafsirProp {
  className?: string;
  listOfTafsir?: Chapter[];
  quran_order: number;
}

export const ListOfTafsir = memo((prop: ListOfTafsirProp) => {
  const { listOfTafsir, quran_order } = prop;
  const isLoadingOfTafsir = useSelector(isLoading);

  // @ts-ignore
  useQcfFont(listOfTafsir);

  const content = isLoadingOfTafsir ? (
    <div
      style={{
        paddingTop: '120px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <OneTafsirCardSkleton />
      <OneTafsirCardSkleton />
      <OneTafsirCardSkleton />
      <OneTafsirCardSkleton />
      <OneTafsirCardSkleton />
      <OneTafsirCardSkleton />
    </div>
  ) : (
    <div className={cls.listOfTafsir}>
      <SurahInfoAndAudioForTafsir />
      {listOfTafsir?.map((oneVerse) => {
        // @ts-ignore
        return <OneTafsirCard data={oneVerse} />;
      })}

      {/* <AudioPlayerComp
        src={`http://iqro-quran.uz/developmentBackend/suras/${quran_order}.mp3`}
      /> */}
    </div>
  );
  return content;
});
