/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { memo } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListOfSuras.module.scss';
import { SurahData } from '@/entities/Surah';
import OneItemSurah from '../OneSurahItem/OneItemSurah';

interface ListOfSurahProp {
  data?: any;
  className?: string;
}

export const ListOfSurah = memo((prop: ListOfSurahProp) => {
  const { data, className } = prop;
  console.log(data, 'dfghj');

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
      {SurahData?.map((oneSurah: any) => {
        return (
          <OneItemSurah
            title={oneSurah.nameLotin}
            numberOfOyat={oneSurah.numberOfOyat}
            orderOfSura={oneSurah.suraId}
            arabic={`00${oneSurah.suraId}`}
            className={classNames(cls.oneSurah)}
          />
        );
      })}
    </HStack>
  );
});
