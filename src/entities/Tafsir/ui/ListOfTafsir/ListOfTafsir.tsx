import React, { memo } from 'react';
import cls from './ListOfTafsir.module.scss';
import { OneTafsirCard } from '../OneTafsirCard/OneTafsirCard';
import { TafsirChapterData } from '@/pages/Tafsir';
import SurahInfoAndAudioForTafsir from '@/shared/ui/SurahInfoAndAudioForTafsir/SurahInfoAndAudioForTafsir';

interface ListOfTafsirProp {
  className?: string;
  listOfTafsir?: TafsirChapterData[];
}

export const ListOfTafsir = memo((prop: ListOfTafsirProp) => {
  const { listOfTafsir } = prop;
  console.log(listOfTafsir, 'listOfTafsir');

  return (
    <div className={cls.listOfTafsir}>
      <SurahInfoAndAudioForTafsir/>
      {listOfTafsir?.map((oneVerse) => {
        // @ts-ignore
        return <OneTafsirCard data={oneVerse} />;
      })}
    </div>
  );
});
