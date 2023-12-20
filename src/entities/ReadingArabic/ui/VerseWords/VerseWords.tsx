import React, { memo, useMemo } from 'react';
import cls from './VerseWords.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import VerseWord from '../VerseWord/VerseWord';
import { Word } from '../../model/types/readingSura';
import isCenterAlignedPage from '@/shared/lib/hooks/usePageUtils/pageUtils';

interface QuranWordsProps {
  className?: string;
  WordsData: {
    startIyat: number;
    endOyat: number;
    words: Word[];
  };
  pageNumber: number;
  lineNumber: number;
}

const QuranWords = memo(
  ({ className, pageNumber, lineNumber, WordsData }: QuranWordsProps) => {
    const centerAlignPage = useMemo(
      () => isCenterAlignedPage(pageNumber, lineNumber),
      [pageNumber, lineNumber],
    );

    return (
      <div
        className={classNames(
          cls.QuranWords,
          {
            [cls.verseTextCenterAlign]: centerAlignPage,
            [cls.verseTextSpaceBetween]: !centerAlignPage,
          },
          [className],
        )}
      >
        {WordsData
          ? Object.values(WordsData.words)
              .reverse()
              .map((word) => <VerseWord key={word._id} Word={word} />)
          : ''}
      </div>
    );
  },
);

export default QuranWords;
