/* eslint-disable i18next/no-literal-string */
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './Setting.module.scss';

interface SettingsProp {
  className?: string;
}

export const Setting = memo((prop: SettingsProp) => {
  return (
    <div className={classNames(cls.setting)}>
      <VStack>
        <p className={classNames(cls.title)}>Mavzular</p>
        <HStack className={classNames(cls.buttonWrapper)}>
          <Button className={classNames(cls.buttonTheme)}>Avto</Button>
          <Button className={classNames(cls.buttonTheme)}>Yorqin</Button>
          <Button className={classNames(cls.buttonTheme)}>Qorong‘i</Button>
        </HStack>

        <HStack justify="between" max>
          <p className={classNames(cls.title)}>Shrift hajmi</p>
          <HStack className={classNames(cls.wrapperSize)}>
            <Button className={classNames(cls.button)}>-</Button>
            <Button className={classNames(cls.button)}>4</Button>
            <Button className={classNames(cls.button)}>+</Button>
          </HStack>
          <HStack>
            <Button className={classNames(cls.restore)}> Qaytarish</Button>
          </HStack>
        </HStack>
      </VStack>
    </div>
  );
});
