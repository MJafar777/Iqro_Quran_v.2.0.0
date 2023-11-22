/* eslint-disable max-len */
/* eslint-disable react/no-children-prop */
/* eslint-disable i18next/no-literal-string */
import React, { memo, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import cls from './Navbar.module.scss';
import { Icon } from '@/shared/ui/Icon';
import {
  Bismillah,
  Logo,
  Burger,
  sec,
  thir,
} from '@/shared/assets/icons/navbar';
import { AppImage } from '@/shared/ui/AppImage';
import { RightSidebar } from '@/widgets/RightSidebar';
import { ListOfPages } from '@/widgets/ListOfPages';
import { Setting } from '@/widgets/Setting';
import { Search } from '@/widgets/Search';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';
import { SidebarMain } from '@/widgets/SidebarMain';
import { fetchTime } from '../model/service/fetchTime';
import { getTimeArrabic } from '../model/selector/getSelecterTime';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fullMoth } from '../model/const/moth';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';

interface NavbarProp {
  className?: string;
}

export const Navbar = memo((prop: NavbarProp) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const [whichSidebar, setWhichSidebar] = useState('settings');

  const { isSidebarActive, setIsSidebarActive, setIsRightsidebarActive } =
    useContext(ButtonsContext);

  const dispatch = useAppDispatch();

  const toogleSidebarSettings = () => {
    setIsRightsidebarActive(false);
    setWhichSidebar('settings');
  };

  const toogleSidebarSearch = () => {
    setIsRightsidebarActive(false);
    setWhichSidebar('Search');
  };

  useEffect(() => {
    dispatch(fetchTime({}));
  }, [dispatch]);

  const getTimeData = useSelector(getTimeArrabic);
  const data = new Date();

  return (
    <div className={classNames(cls.nabar)}>
      <HStack className={classNames(cls.burger)} justify="start" gap="16">
        <Burger
          className={classNames(cls.icon)}
          onClick={() => setIsSidebarActive(!isSidebarActive)}
        />

        <Link to="/">
          <Icon Svg={Logo} className={cls.logo} />
        </Link>
      </HStack>
      <HStack className={classNames(cls.wrapperTime)} max justify="center">
        <div className={classNames(cls.timeOfArrabic)}>
          {getTimeData?.dayOfMonth} - {getTimeData?.uz?.monthText}{' '}
          {getTimeData?.year}-yil
        </div>

        <AppImage className={classNames(cls.bismillah)} src={Bismillah} />

        <div className={classNames(cls.time)}>
          {data.getDate()} - {fullMoth[data?.getMonth()]} {data.getFullYear()}
          -yil
        </div>
      </HStack>
      <HStack className={classNames(cls.iconWrapper)} justify="end" gap="8">
        <LangSwitcher />
        <div onClick={toogleSidebarSettings}>
          <Icon className={classNames(cls.icon)} Svg={sec} />
        </div>
        <div onClick={toogleSidebarSearch}>
          <Icon className={classNames(cls.icon)} Svg={thir} />
        </div>
      </HStack>
      <RightSidebar
        children={whichSidebar === 'settings' ? <Setting /> : <Search />}
      />
      <SidebarMain children={<ListOfPages />} />
    </div>
  );
});
