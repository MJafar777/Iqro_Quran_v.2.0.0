/* eslint-disable react/button-has-type */
/* eslint-disable i18next/no-literal-string */
import React, { memo, useState, useCallback } from 'react';
import { Button } from '@mui/material';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './Setting.module.scss';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { Icon } from '@/shared/ui/Icon';
import { back } from '@/shared/assets/icons/sidebarSetting';

interface SettingsProp {
  className?: string;
}

export const Setting = memo((prop: SettingsProp) => {
  const [fontSize, setFontSize] = useState(3);

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
    <div className={classNames(cls.setting)}>
      <VStack gap="32">
        <p className={classNames(cls.title)}>Mavzular</p>
        <HStack max className={classNames(cls.buttonWrapper)}>
          <ThemeSwitcher />
        </HStack>

        <HStack
          justify="between"
          align="center"
          className={cls.changeFiontSize}
          max
        >
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
        </HStack>
        <HStack>
          <Button className={classNames(cls.restore)} onClick={backSize}>
            <Icon Svg={back} className={cls.back} /> Qaytarish
          </Button>
        </HStack>
      </VStack>
    </div>
  );
});
