import React, { memo } from 'react';
import cls from './VerseWords.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Word } from '../../model/types/readingArabicSchema';
import VerseWord from '../VerseWord/VerseWord';

interface QuranWordsProps {
  className?: string;
  WordsInfo: Word[];
}

const QuranWords = memo(({ className, WordsInfo }: QuranWordsProps) => {
  return (
    <div className={classNames(cls.QuranWords, {}, [])}>
      {WordsInfo
        ? WordsInfo.map((word) => <VerseWord key={word._id} Word={word} />)
        : ''}
    </div>
  );
});

export default QuranWords;
