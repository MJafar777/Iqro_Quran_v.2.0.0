import React, { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import cls from './QuranVerse.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Verse, Word } from '../../model/types/readingSura';
import useQcfFontRead from '../../../../shared/lib/hooks/useQcfFontRead/useQcfFontRead';
import QuranPage from '../QuranPages/QuranPage';
import { getSelectedPageRead } from '@/entities/PageRead';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import ReadTextSkeleton from '@/shared/ui/ReadTextSkeleton/ReadTextSkeleton';

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

  const { fetchIsLoading } = useContext(ButtonsContext);
  const currentPageRead = useSelector(getSelectedPageRead);

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

  console.log(rowObj[currentPageRead.pageNumber]);

  return (
    <div className={classNames(cls.QuranVerse, {}, [className])}>
      {fetchIsLoading ? (
        <>
          {Object.values(rowObj).map((verse, index) => (
            <QuranPage pageData={verse} key={index} isLoading={false} />
          ))}
          <div
            className={classNames(cls.QuranVerse__skeloton, {}, [className])}
          >
            <ReadTextSkeleton />
          </div>
        </>
      ) : (
        Object.values(rowObj).map((verse, index) => (
          <QuranPage pageData={verse} key={index} isLoading={false} />
        ))
      )}
    </div>
  );
});

export default QuranVerse;
