import React, { memo } from 'react';
import cls from './QuranVerse.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import VerseWords from '../VerseWords/VerseWords';
import { Verse, Word } from '../../model/types/readingSura';
import useQcfFontRead from '../../../../shared/lib/hooks/useQcfFontRead/useQcfFontRead';

interface QuranVerseProps {
  className?: string;
  verseData: Verse[];
}

interface rowType {
  [key: number]: Word[];
}

const QuranVerse = memo(({ className, verseData }: QuranVerseProps) => {
  const rows: rowType = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
  };

  useQcfFontRead(verseData);

  verseData?.forEach((verse) => {
    verse.words?.forEach((word) => {
      rows[word.line_number].unshift(word);
    });
  });

  return (
    <div className={classNames(cls.QuranVerse, {}, [])}>
      <VerseWords WordsInfo={rows[1]} />
      <VerseWords WordsInfo={rows[2]} />
      <VerseWords WordsInfo={rows[3]} />
      <VerseWords WordsInfo={rows[4]} />
      <VerseWords WordsInfo={rows[5]} />
      <VerseWords WordsInfo={rows[6]} />
      <VerseWords WordsInfo={rows[7]} />
      <VerseWords WordsInfo={rows[8]} />
      <VerseWords WordsInfo={rows[9]} />
      <VerseWords WordsInfo={rows[10]} />
      <VerseWords WordsInfo={rows[11]} />
      <VerseWords WordsInfo={rows[12]} />
      <VerseWords WordsInfo={rows[13]} />
      <VerseWords WordsInfo={rows[14]} />
      <VerseWords WordsInfo={rows[15]} />
    </div>
  );
});

export default QuranVerse;
