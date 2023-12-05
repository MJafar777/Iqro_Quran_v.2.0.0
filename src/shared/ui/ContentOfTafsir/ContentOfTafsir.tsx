/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { memo, useState } from 'react';
// import axios from 'axios';
import cls from './ContentOfTafsir.module.scss';
import { Word } from '@/pages/Tafsir';
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

  // useEffect(() => {
  //   // Axios GET request
  //   axios
  //     .get<Data[]>(`http://iqro-quran.uz/developmentBackend/api/v1/audioverse`)
  //     .then((response) => {
  //       console.log(response, 'response');

  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // console.log(data, 'data');
  return (
    <div className={cls.content}>
      <p className={cls.arab}>
        {words?.map((word) => {
          // eslint-disable-next-line no-return-assign
          return (
            <span
              style={{
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
      <p className={cls.text}>{text?.replace(/<sup[^>]*>1<\/sup>/g, '')}</p>
    </div>
  );
});
