import React, { memo } from 'react';
import cls from './QuranVerse.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Chapter } from '../../model/types/readingArabicSchema';
import VerseWords from '../VerseWords/VerseWords';

interface QuranVerseProps {
  className?: string;
  verseData: Chapter[];
}

const QuranVerse = memo(({ className, verseData }: QuranVerseProps) => {
  return (
    <div className={classNames(cls.QuranVerse, {}, [])}>
      {verseData
        ? verseData.map((verse) => (
            <VerseWords key={verse._id} WordsInfo={verse.words} />
          ))
        : ''}
    </div>
  );
});

export default QuranVerse;
