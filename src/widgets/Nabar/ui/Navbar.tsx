/* eslint-disable react/no-children-prop */
/* eslint-disable i18next/no-literal-string */
import React, { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import cls from './Navbar.module.scss';
import { Icon } from '@/shared/ui/Icon';
import {
  Bismillah,
  Logo,
  burger,
  fir,
  sec,
  thir,
} from '@/shared/assets/icons/navbar';
import { AppImage } from '@/shared/ui/AppImage';
import { Sidebar } from '@/widgets/Sidebar';

interface NavbarProp {
  className?: string;
}

export const Navbar = memo((prop: NavbarProp) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toogleSidebar = () => {
    setIsOpenSidebar((pre) => !pre);
  };

  const sidebarContent = <div>jdjd</div>;

  return (
    <div className={classNames(cls.nabar)}>
      <HStack className={classNames(cls.burger)} justify="start" gap="16">
        <div onClick={toogleSidebar}>
          <Icon className={classNames(cls.icon)} Svg={burger} />
        </div>
        <AppImage src={Logo} className={classNames(cls.logo)} />
      </HStack>

      <HStack className={classNames(cls.wrapperTime)} max justify="center">
        <div className={classNames(cls.timeOfArrabic)}>15 Shavvol 1444-yil</div>

        <AppImage className={classNames(cls.bismillah)} src={Bismillah} />

        <div className={classNames(cls.time)}>06 May 2023-yil</div>
      </HStack>

      <HStack className={classNames(cls.iconWrapper)} justify="end" gap="8">
        <Icon className={classNames(cls.icon)} Svg={fir} />
        <Icon className={classNames(cls.icon)} Svg={sec} />
        <Icon className={classNames(cls.icon)} Svg={thir} />
      </HStack>

      <Sidebar children={sidebarContent} toogleBurger={isOpenSidebar} left />
    </div>
  );
});
