import React, { memo } from 'react';
import cls from './VerseWord.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Word } from '../../model/types/readingSura';

interface QuranWordsProp {
  className?: string;
  Word?: Word[];
}

const QuranWord = memo(({ className, Word }: QuranWordsProp) => {

  return (
    <div className={classNames(cls.QuranWord, {}, [className])}>
      {Word?.map((word) => {
        return (
          <span
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
