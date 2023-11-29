import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import cls from './VerseWords.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import VerseWord from '../VerseWord/VerseWord';
import { Word } from '../../model/types/readingSura';
import { getSelectedSura } from '@/entities/Surah';
import { getSelectedPage } from '@/entities/Page';

interface QuranWordsProps {
  className?: string;
  WordsInfo: Word[];
}

const QuranWords = memo(({ className, WordsInfo }: QuranWordsProps) => {
  const currentSura = useSelector(getSelectedSura);
  const currentPage = useSelector(getSelectedPage);

  return (
    <div
      style={{
        justifyContent:
          currentSura.quran_order === 1 ||
          (currentSura.quran_order === 2 && currentPage.pageNumber === 1)
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
