/* eslint-disable react/no-children-prop */
import React, { memo, useMemo, useState } from 'react';
import iconSearch from '../../../../shared/assets/icons/icon-Search.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainHeader.tsx.module.scss';
import oyat from '../../../../shared/assets/icons/oyat.svg';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign } from '@/shared/ui/Text';
import { Button, ButtonSize } from '@/shared/ui/Button/Button';
import { MostSearchButton } from '@/shared/ui/MostSearchButton/MostSearchButton';

interface MainHeaderComponentProps {
  className?: string;
}

const arrMostSearchSurah = [
  { name: 'Fatihah', suraId: 1, numberOfOyat: 7 },
  { name: 'Mulk', suraId: 67, numberOfOyat: 30 },
  { name: 'Ya-Sin', suraId: 36, numberOfOyat: 83 },
  { name: 'Kahf', suraId: 18, numberOfOyat: 110 },
  { name: "Waqi'ah", suraId: 56, numberOfOyat: 96 },
];

export const MainHeader = memo((prop: MainHeaderComponentProps) => {
  const { className } = prop;
  const [searchSurah, setSearchSurah] = useState('');

  const getSearch = (e: any) => {
    setSearchSurah(e.target.value);
  };

  const mostSearchSurah = useMemo(
    () =>
      arrMostSearchSurah.map((oneSurah) => (
        <MostSearchButton
          key={oneSurah.suraId}
          children={oneSurah.name}
          suraId={oneSurah.suraId}
          numberOfOyat={oneSurah.numberOfOyat}
        />
      )),
    [],
  );

  return (
    <div className={classNames(cls.MainHeader)}>
      <VStack align="center" gap="16">
        <Icon Svg={oyat} className={cls.icon} />
        <Text
          className={cls.text}
          align={TextAlign.CENTER}
          text="Albatta, bu Qur'on eng to‘g‘ri yo‘lga 
        hidoyat qilur va solih amallarni qiluvchi mo‘minlarga xushxabarini bеrurki,
        albatta, o‘shalarga ulug‘ ajr bordi"
        />
        <HStack className={cls.containerOfIput} gap="8" justify="between">
          <Icon Svg={iconSearch} className={cls.search} />
          <input
            className={cls.input}
            placeholder="Qur’ondan qidiring!"
            onChange={(e) => getSearch(e)}
          />
          <Button
            style={{ backgroundColor: 'rgb(42, 156, 162)' }}
            size={ButtonSize.M}
            className={cls.buttons}
          >
            Qidirish
          </Button>
        </HStack>
        <HStack justify="between" gap="16">
          {' '}
          {mostSearchSurah}
        </HStack>
      </VStack>
    </div>
  );
});
