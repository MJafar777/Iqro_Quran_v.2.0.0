import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import cls from './VerseWords.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import VerseWord from '../VerseWord/VerseWord';
import { Word } from '../../model/types/readingSura';

import { getSelectedSuraRead } from '@/entities/SurahRead';
import { getSelectedPageRead } from '@/entities/PageRead';

interface QuranWordsProps {
  className?: string;
  WordsInfo: Word[];
}

const QuranWords = memo(({ className, WordsInfo }: QuranWordsProps) => {
  const currentSuraRead = useSelector(getSelectedSuraRead);
  const currentPageRead = useSelector(getSelectedPageRead);

  return (
    <div
      style={{
        justifyContent:
          currentSuraRead.quran_order === 1 ||
          (currentSuraRead.quran_order === 2 &&
            currentPageRead.pageNumber === 2)
            ? 'center'
            : 'space-between',
      }}
      className={classNames(cls.QuranWords, {}, [])}
    >
      {WordsInfo
        ? WordsInfo.map((word) => <VerseWord key={word._id} Word={word} />)
        : ''}
    </div>
  );
});

export default QuranWords;
