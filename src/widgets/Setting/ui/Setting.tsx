/* eslint-disable i18next/no-literal-string */
import React, { memo } from 'react';
import { Button } from '@mui/material';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './Setting.module.scss';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';

interface SettingsProp {
  className?: string;
}

export const Setting = memo((prop: SettingsProp) => {
  return (
    <div className={classNames(cls.setting)}>
      <VStack gap="32">
        <p className={classNames(cls.title)}>Sozlamalar</p>
        <HStack max className={classNames(cls.buttonWrapper)}>
          <ThemeSwitcher />
        </HStack>

        <HStack justify="between" max>
          <p className={classNames(cls.title)}>Shrift hajmi</p>
          <HStack className={classNames(cls.wrapperSize)}>
            <span className={classNames(cls.button)}>-</span>
            <span className={classNames(cls.button)}>4</span>
            <span className={classNames(cls.button)}>+</span>
          </HStack>
          <HStack>
            <Button className={classNames(cls.restore)}> Qaytarish</Button>
          </HStack>
        </HStack>
      </VStack>
    </div>
  );
});
