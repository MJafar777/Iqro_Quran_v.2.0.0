import React, { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListOfSuras.module.scss';
import OneItemSurah from '../OneSurahItem/OneItemSurah';
import { OneSuraInListSchema } from '@/pages/MainPage';

interface ListOfSurahProp {
  data?: any;
  className?: string;
}

export const ListOfSurah = memo((prop: ListOfSurahProp) => {
  const { data, className } = prop;

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
      {data?.data?.map((oneSurah: OneSuraInListSchema) => {
        return (
          <OneItemSurah
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
