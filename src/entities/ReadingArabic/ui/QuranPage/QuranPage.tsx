import React, { memo, useEffect, useState } from 'react';
import cls from './QuranPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Lines, Verse, Word } from '../../model/types/readingSura';
import QuranWords from '../VerseWords/VerseWords';
import useQcfFontRead from '@/shared/lib/hooks/useQcfFontRead/useQcfFontRead';

interface pageDataObjType {
  [key: number]: Word[];
}

interface QuranPageProps {
  className?: string;
  pageData: Lines;
  isLoading: boolean;
}

const QuranPage = memo(({ className, pageData, isLoading }: QuranPageProps) => {
  const [verse, setVerse] = useState([{ page_number: 1 }]);

  // this for gather page of each verse and then give to font
  useEffect(() => {
    if (Object.values(pageData).length > 0)
      setVerse(
        Object.values(pageData)?.map((obj) => {
          return { page_number: obj.words[0]?.page_number };
        }),
      );
  }, [pageData]);

  useEffect(() => {}, []);

  useQcfFontRead(verse as unknown as Verse[]);

  // console.log(pageData, '');

  return (
    <div
      id={`${pageData[5].words[0].page_number}`}
      data-testid="QuranPage"
      className={classNames(cls.QuranPage, {}, [])}
    >
      {!isLoading && Object.values(pageData).length >= 0 ? (
        <>
          {Object.values(pageData).map((wordInfo, index) => (
            <QuranWords
              WordsInfo={wordInfo}
              // pageNumber={Object.values(pageData)?.[0]?.[0]?.page_number}
              // lineNumber={Object.values(pageData)?.[0]?.[0]?.line_number}
              pageNumber={wordInfo.words?.page_number}
              lineNumber={index}
            />
          ))}

          <p className={classNames(cls.QuranPage__pageNumber, {}, [])}>
            {/* {Object.values(pageData)[0]} */}
          </p>
          <div className={classNames(cls.QuranPage__pageRow, {}, [])} />
        </>
      ) : (
        ''
      )}
    </div>
  );
});

export default QuranPage;
