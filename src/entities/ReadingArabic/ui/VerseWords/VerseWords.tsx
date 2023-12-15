import React, { memo } from 'react';
import cls from './VerseWords.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import VerseWord from '../VerseWord/VerseWord';
import { Word } from '../../model/types/readingSura';
// import isCenterAlignedPage from '@/shared/lib/hooks/usePageUtils/pageUtils';

interface QuranWordsProps {
  className?: string;
  WordsInfo?: { words: Word[] };
}

const QuranWords = memo(({ className, WordsInfo }: QuranWordsProps) => {
  return (
    <div className={classNames(cls.QuranWords, {}, [className])}>
      <VerseWord Word={WordsInfo?.words} />
    </div>
  );
});

export default QuranWords;
