/* eslint-disable camelcase */
import React, { memo } from 'react';
import cls from './ContentOfTafsir.module.scss';
import { Word } from '@/pages/Tafsir';

interface ContentOfTafsirProp {
  arab?: string;
  text?: string;
  words: Word[];
  page_number:number;
}

export const ContentOfTafsir = memo((prop: ContentOfTafsirProp) => {
  const { arab, text, words ,page_number} = prop;

  return (
    <div className={cls.content}>
      <p className={cls.arab}>
        {words?.map((word) => {
          return <span style={{fontFamily:`p${page_number}-v1`}}>{" "}{word.arab}</span>;
        })}
      </p>
      <p className={cls.text}>{text}</p>
    </div>
  );
});
