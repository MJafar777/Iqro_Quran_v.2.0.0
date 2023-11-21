/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectorSearch } from '../../model/selector/getSelectorSerach';
import { HStack } from '@/shared/ui/Stack';
import OneItemSurah from '../OneSurahItem/OneItemSurah';

export const Search = () => {
  const dataSearch = useSelector(getSelectorSearch);

  return (
    <>
      <HStack
        gap="16"
        style={{
          flexWrap: 'wrap',
          marginTop: '30px',
          justifyContent: 'center',
        }}
        max
      >
        {dataSearch?.map((oneSurah, index: number) => {
          return (
            <OneItemSurah
              key={index}
              title={oneSurah.nom}
              numberOfOyat={oneSurah.oyatlarSoni}
              orderOfSura={oneSurah.nomer}
              arabic={`00${oneSurah.nomer}`}
            />
          );
        })}
      </HStack>
    </>
  );
};
