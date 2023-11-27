import React, { memo } from 'react';
import cls from './ListOfTafsir.module.scss';
import { OneTafsirCard } from '../OneTafsirCard/OneTafsirCard';
import { TafsirChapterData } from '@/pages/Tafsir';

interface ListOfTafsirProp {
  className?: string;
  listOfTafsir?: TafsirChapterData[];
}

export const ListOfTafsir = memo((prop: ListOfTafsirProp) => {
  const { listOfTafsir } = prop;
  console.log(listOfTafsir, 'listOfTafsir');

  return (
    <div className={cls.listOfTafsir}>
      <OneTafsirCard />
    </div>
  );
});
