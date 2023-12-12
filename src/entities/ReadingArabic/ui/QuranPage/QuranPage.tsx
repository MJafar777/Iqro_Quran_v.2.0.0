import React, { memo } from 'react';
import cls from './QuranPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Word } from '../../model/types/readingSura';
import QuranWords from '../VerseWords/VerseWords';

interface pageDataObjType {
  [key: number]: Word[];
}

interface QuranPageProps {
  className?: string;
  pageData: pageDataObjType;
  isLoading: boolean;
}

const QuranPage = memo(({ className, pageData, isLoading }: QuranPageProps) => {
  return (
    <div
      id={Object.values(pageData)[0][0].page_number}
      data-testid="QuranPage"
      className={classNames(cls.QuranPage, {}, [])}
    >
      {!isLoading ? (
        <>
          {Object.values(pageData).map((word) => (
            <QuranWords
              WordsInfo={word}
              pageNumber={Object.values(pageData)[0][0].page_number}
              lineNumber={Object.values(pageData)[0][0].line_number}
            />
          ))}

          <p className={classNames(cls.QuranPage__pageNumber, {}, [])}>
            {Object.values(pageData)[0][0].page_number}
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
