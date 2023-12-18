import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './QuranPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

import { getSelectedPageRead } from '@/entities/PageRead';

import QuranWords from '../VerseWords/VerseWords';
import { Surah, Verse } from '../../model/types/readingSura';
import useQcfFontRead from '../../../../shared/lib/hooks/useQcfFontRead/useQcfFontRead';

interface QuranPageProps {
  className?: string;
  pageData: Surah;
  isLoading: boolean;
}

const QuranPage = memo(({ className, pageData, isLoading }: QuranPageProps) => {
  const [verse, setVerse] = useState([{ page_number: 1 }]);
  const currentPageRead = useSelector(getSelectedPageRead);

  // this for gather page of each verse and then give to font
  useEffect(() => {
    setVerse([{ page_number: currentPageRead.pageNumber }]);
  }, [currentPageRead.pageNumber]);

  useQcfFontRead(verse as unknown as Verse[]);

  return (
    <div
      id={Object.values(pageData)[0][0].page_number}
      data-testid="QuranPage"
      className={classNames(cls.QuranPage, {}, [className])}
    >
      {Object.values(pageData.linesV2)?.map((element) => (
        <QuranWords
          WordsData={element}
          pageNumber={currentPageRead.pageNumber}
          lineNumber={element.words[0].line_number2}
        />
      ))}

      <p className={classNames(cls.QuranPage__pageNumber, {}, [])}>
        {currentPageRead.pageNumber}
      </p>
      <div className={classNames(cls.QuranPage__pageRow, {}, [])} />
    </div>
  );
});

export default QuranPage;
