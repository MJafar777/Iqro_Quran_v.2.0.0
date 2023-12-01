import React, { memo } from 'react';
import cls from './VerseWords.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import VerseWord from '../VerseWord/VerseWord';
import { Word } from '../../model/types/readingSura';

interface QuranWordsProps {
  className?: string;
  WordsInfo: Word[];
  checkPageNumber: number;
}

const QuranWords = memo(
  ({ className, checkPageNumber, WordsInfo }: QuranWordsProps) => {
    return (
      <div
        style={{
          justifyContent:
            checkPageNumber === 1 || checkPageNumber === 2
              ? 'center'
              : 'space-between',
        }}
        className={classNames(cls.QuranWords, {}, [className])}
      >
        {WordsInfo
          ? Object.values(WordsInfo)
              .reverse()
              .map((word) => <VerseWord key={word._id} Word={word} />)
          : ''}
      </div>
    );
  },
);

export default QuranWords;
