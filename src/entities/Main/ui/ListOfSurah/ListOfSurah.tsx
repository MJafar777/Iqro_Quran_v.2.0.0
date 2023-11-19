import React, { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListOfSuras.module.scss';
import OneItemSurah from '../OneSurahItem/OneItemSurah';
import { OneSuraInListSchema } from '@/pages/MainPage';
import { OneItemSurahSkleton } from '../OneSurahItem/OneItemSurahSkleton';

interface ListOfSurahProp {
  data?: any;
  className?: string;
  isLoading?: boolean;
  error?: string;
}

const skeletonList = Array.from({ length: 18 }, () => <OneItemSurahSkleton />);

export const ListOfSurah = memo((prop: ListOfSurahProp) => {
  const { data, className, isLoading, error } = prop;
  return (
    <HStack
      className={classNames(cls.surahList, {}, [className])}
      gap="16"
      style={{
        flexWrap: 'wrap',
        marginTop: '30px',
        justifyContent: 'center',
      }}
    >
      {isLoading
        ? skeletonList
        : data?.map((oneSurah: OneSuraInListSchema,index:number) => {
            return (
              <OneItemSurah
                key={index}
                title={oneSurah.name_simple}
                numberOfOyat={oneSurah.count_verse}
                orderOfSura={oneSurah.quran_order}
                arabic={`00${oneSurah.quran_order}`}
                className={classNames(cls.oneSurah)}
              />
            );
          })}
    </HStack>
  );
});
