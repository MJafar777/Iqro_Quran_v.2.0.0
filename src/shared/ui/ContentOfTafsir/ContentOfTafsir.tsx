/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { memo, useContext, useState } from 'react';
// import axios from 'axios';
import cls from './ContentOfTafsir.module.scss';
import { Word } from '@/pages/Tafsir';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
// import { classNames } from '@/shared/lib/classNames/classNames';
// import { peekaboo } from '@/peekabo';
// import axios from 'axios';
// import { peekaboo } from '@/peekabo';

interface ContentOfTafsirProp {
  arab?: string;
  text?: string;
  words: Word[];
  page_number: number;
}

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const ContentOfTafsir = memo((prop: ContentOfTafsirProp) => {
  const { arab, text, words, page_number } = prop;
  const [data, setData] = useState<Data[]>([]);
  const { fontSize } = useContext(ButtonsContext);

  return (
    <div className={cls.content}>
      <p className={cls.arab}>
        {words?.map((word) => {
          // eslint-disable-next-line no-return-assign
          return (
            <span
              style={{
                fontSize: `${fontSize * 10}px`,
                fontFamily: `p${page_number}-v1`,
              }}
              id={`${word.location}`}
            >
              {' '}
              {word.code_v2}
            </span>
          );
        })}
      </p>
      <p style={{ fontSize: `${fontSize * 10}px` }} className={cls.text}>
        {text?.replace(/<sup[^>]*>1<\/sup>/g, '')}
      </p>
    </div>
  );
});
