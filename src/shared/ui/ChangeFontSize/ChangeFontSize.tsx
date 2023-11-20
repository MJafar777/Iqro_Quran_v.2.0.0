/* eslint-disable react/button-has-type */
import React, { memo, useCallback, useContext, useState } from 'react';
import cls from './ChangeFontSize.module.scss';
import { back } from '@/shared/assets/icons/sidebarSetting';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { HStack, VStack } from '../Stack';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button';

export const ChangeFontSize = memo(() => {
  const [fontSize, setFontSize] = useState(3);

  const { isRightsidebarActive, setIsRightsidebarActive } =
    useContext(ButtonsContext);

  const decrease = useCallback(() => {
    if (fontSize > 1) setFontSize((pre: number) => pre - 1);
  }, [fontSize]);

  const increase = useCallback(() => {
    if (fontSize < 5) setFontSize((pre: number) => pre + 1);
  }, [fontSize]);

  const backSize = useCallback(() => {
    setFontSize(3);
  }, []);

  return (
    <VStack max align="center">
      <div className={cls.changeFiontSize}>
        <p className={cls.title}>Shrift hajmi</p>
        <HStack className={classNames(cls.wrapperSize)} align="center">
          <button className={cls.button} onClick={decrease}>
            -
          </button>
          <button className={cls.button}>{fontSize}</button>
          <button className={cls.button} onClick={increase}>
            +
          </button>
        </HStack>
      </div>
      <HStack justify="center" align="center" max>
        <Button className={classNames(cls.restore)} onClick={backSize}>
          <Icon Svg={back} className={cls.back} /> <p>Qaytarish</p>
        </Button>
      </HStack>
    </VStack>
  );
});