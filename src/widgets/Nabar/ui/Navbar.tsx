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
import { RightSidebar } from '@/widgets/RightSidebar';

interface NavbarProp {
  className?: string;
}

export const Navbar = memo((prop: NavbarProp) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [whichSidebar, setWhichSidebar] = useState('settings');

  const toogleSidebarSettings = () => {
    setIsOpenSidebar(false);
    setWhichSidebar('settings');
  };

  const toogleSidebarSearch = () => {
    setIsOpenSidebar(false);
    setWhichSidebar('Search');
  };

  return (
    <div className={classNames(cls.nabar)}>
      <HStack className={classNames(cls.burger)} justify="start" gap="16">
        <div>
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
        <div onClick={toogleSidebarSettings}>
          <Icon className={classNames(cls.icon)} Svg={sec} />
        </div>
        <div onClick={toogleSidebarSearch}>
          <Icon className={classNames(cls.icon)} Svg={thir} />
        </div>
      </HStack>

      <RightSidebar
        children={<>k</>}
        isOpenSidebar={isOpenSidebar}
        whichSidebar={whichSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
    </div>
  );
});
