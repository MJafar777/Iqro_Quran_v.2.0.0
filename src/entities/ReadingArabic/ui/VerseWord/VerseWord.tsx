import React, { memo } from 'react';
import cls from './VerseWord.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Word } from '../../model/types/readingSura';

interface QuranWordsProp {
  className?: string;
  Word?: Word[];
}

const QuranWord = memo(({ className, Word }: QuranWordsProp) => {
  console.log(Word![0]);

  return (
    <div
      className={classNames(
        // @ts-ignore
        Word[0]?.page_number === 1 || Word[0]?.page_number === 2
          ? cls.QuranWordP1
          : cls.QuranWord,
        {},
        [className],
      )}
    >
      {Word?.map((word) => {
        return (
          <span
            id={`${word.location}`}
            className={classNames(cls.QuranWord__text, {}, [className])}
            style={{
              fontSize: '40px',
              fontFamily: `p${word.page_number}-v1`,
            }}
          >
            {' '}
            {word.code_v2}
          </span>
        );
      })}
    </div>
  );
});

export default QuranWord;
