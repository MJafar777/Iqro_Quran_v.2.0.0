import React, { memo } from 'react';
import cls from './QuranVerse.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Verse, Word } from '../../model/types/readingSura';
import useQcfFontRead from '../../../../shared/lib/hooks/useQcfFontRead/useQcfFontRead';
import QuranPage from '../QuranPages/QuranPage';

interface QuranVerseProps {
  className?: string;
  verseData: Verse[];
}

interface rowArrType {
  [index: number]: Word[];
}

interface rowObjType {
  [key: number]: rowArrType;
}

const QuranVerse = memo(({ className, verseData }: QuranVerseProps) => {
  const rowObj: rowObjType = {};

  useQcfFontRead(verseData);

  verseData?.forEach((verse) =>
    verse?.words?.forEach((word) => {
      if (!rowObj[word.page_number]) {
        rowObj[word.page_number] = {};
      }

      if (!rowObj[word.page_number][word.line_number]) {
        rowObj[word.page_number][word.line_number] = [];
      }

      rowObj[word.page_number][word.line_number].push(word);
    }),
  );

  return (
    <div className={classNames(cls.QuranVerse, {}, [className])}>
      {Object.values(rowObj).map((verse, index) => (
        <QuranPage pageData={verse} key={index} />
      ))}
    </div>
  );
});

export default QuranVerse;
