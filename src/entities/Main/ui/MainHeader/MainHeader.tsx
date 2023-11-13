/* eslint-disable i18next/no-literal-string */
import React, { memo } from 'react';
import iconSearch from '../../../../shared/assets/icons/icon-Search.svg'
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainHeader.tsx.module.scss';
import oyat from '../../../../shared/assets/icons/oyat.svg';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign } from '@/shared/ui/Text';
import { Button, ButtonSize } from '@/shared/ui/Button';

interface MainHeaderComponentProps {
  className?: string;
}

export const MainHeader = memo((prop: MainHeaderComponentProps) => {
  const { className } = prop;
  return (
    <div  className={classNames(cls.MainHeader)}>
    <VStack align='center' gap='16'>
     <Icon Svg={oyat} className={cls.icon} />
      <Text
        className={cls.text}
        align={TextAlign.CENTER}
        text="Albatta, bu Qur'on eng to‘g‘ri yo‘lga 
        hidoyat qilur va solih amallarni qiluvchi mo‘minlarga xushxabarini bеrurki,
        albatta, o‘shalarga ulug‘ ajr bordi"
        />
      <HStack   className={cls.containerOfIput} gap='8' justify='between'>
        <Icon Svg={iconSearch}  className={cls.search}/>
        <input className={cls.input} placeholder="Qur’ondan qidiring!" />
        <Button style={{backgroundColor:'rgb(42, 156, 162)'}} size={ButtonSize.M} className={cls.buttons}>Qidirish </Button>
      </HStack>
    </VStack>
        </div>
  );
});
