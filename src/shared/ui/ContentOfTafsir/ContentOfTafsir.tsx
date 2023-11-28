import React, { memo } from 'react';
import cls from './ContentOfTafsir.module.scss';
import { Word } from '@/pages/Tafsir';

interface ContentOfTafsirProp {
  arab?: string;
  text?: string;
  words: Word[];
}

export const ContentOfTafsir = memo((prop: ContentOfTafsirProp) => {
  const { arab, text, words } = prop;
  console.log(words);

  return (
    <div className={cls.content}>
      <p className={cls.arab}>
        {words?.map((word) => {
          return <span>{" "}{word.arab}</span>;
        })}
      </p>
      <p className={cls.text}>{text}</p>
    </div>
  );
});
