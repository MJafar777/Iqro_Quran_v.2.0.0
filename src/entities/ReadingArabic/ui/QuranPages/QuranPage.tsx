import React from 'react';
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
}

const QuranPage = ({ className, pageData }: QuranPageProps) => {
  return (
    <div className={classNames(cls.QuranPage, {}, [])}>
      {Object.values(pageData).map((word) => (
        <QuranWords WordsInfo={word} />
      ))}
      <h1>Shu yerda page ozgaradi</h1>
    </div>
  );
};

export default QuranPage;
