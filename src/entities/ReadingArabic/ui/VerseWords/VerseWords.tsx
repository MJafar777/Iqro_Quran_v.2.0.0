import React, { memo, useMemo } from 'react';
import cls from './VerseWords.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import VerseWord from '../VerseWord/VerseWord';
import { Word } from '../../model/types/readingSura';
import isCenterAlignedPage from '@/shared/lib/hooks/usePageUtils/pageUtils';

interface QuranWordsProps {
  className?: string;
  WordsInfo?: { words: Word[] };
  pageNumber?: number;
  lineNumber?: number;
}

const QuranWords = memo(
  ({ className, pageNumber, lineNumber, WordsInfo }: QuranWordsProps) => {
    const centerAlignPage = useMemo(
      () => isCenterAlignedPage(pageNumber || 1, lineNumber || 1),
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
        {/* {WordsInfo
          ? Object.values(WordsInfo)
              .reverse()
              // @ts-ignore
              .map((word) => <VerseWord key={word._id} Word={word} />)
          : ''} */}
        <VerseWord Word={WordsInfo?.words} />
      </div>
    );
  },
);

export default QuranWords;
