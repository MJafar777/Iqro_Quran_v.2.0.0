import React, { memo } from 'react';
import cls from './VerseWord.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Word } from '../../model/types/readingArabicSchema';

interface QuranWordsProp {
  className?: string;
  Word?: Word;
}

const QuranWord = memo(({ className, Word }: QuranWordsProp) => {
  return (
    <div className={classNames(cls.QuranWord, {}, [className])}>
      {Word ? (
        <div
          className={classNames(cls.QuranWordText, {}, [className])}
          style={{ fontSize: '40px' }}
        >
          {Word.text_uthmani}
        </div>
      ) : (
        ''
      )}
    </div>
  );
});

export default QuranWord;
