/* eslint-disable react/button-has-type */
/* eslint-disable i18next/no-literal-string */
import React, { memo, useContext, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './Setting.module.scss';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { Icon } from '@/shared/ui/Icon';
import CloseIcon from '@/shared/assets/icons/close-icon.svg';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { ChangeFontSize } from '@/shared/ui/ChangeFontSize/ChangeFontSize';

interface SettingsProp {
  className?: string;
}

export const Setting = memo((prop: SettingsProp) => {

  const { isRightsidebarActive, setIsRightsidebarActive } =
    useContext(ButtonsContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onToggle = () => {
    setIsRightsidebarActive(!isRightsidebarActive);
  };

  const setting = useMemo(
    () => (
      <div className={classNames(cls.setting)}>
        <HStack className={cls.headerOfSidebar}>
          <p className={cls.titleOfHeader}> Sozlamlar</p>
          <Icon
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.closeBtn}
            Svg={CloseIcon}
            height={0}
            clickable
          />
        </HStack>
        <VStack gap="32">
          <p className={classNames(cls.title)}>Mavzular</p>
          <HStack max className={classNames(cls.buttonWrapper)}>
            <ThemeSwitcher />
          </HStack>
          <ChangeFontSize  />
        </VStack>
      </div>
    ),
    [onToggle],
  );

  return setting;
});
