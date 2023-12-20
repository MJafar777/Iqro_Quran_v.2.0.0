import React, { memo, useContext, useState } from 'react';
import cls from './ContentOfTafsir.module.scss';
import { Word } from '@/pages/Tafsir';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

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
  // eslint-disable-next-line camelcase
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
                // eslint-disable-next-line camelcase
                fontFamily: `p${page_number}-v1`,
              }}
              id={`${word.location}`}
              key={`${word.location}`}
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
